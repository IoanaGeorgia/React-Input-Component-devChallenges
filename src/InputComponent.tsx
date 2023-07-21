
import * as React from 'react'
import { useState } from 'react'
import { PropTypes } from 'prop-types'
import MaterialIcon from 'react-google-material-icons'


const InputComponent = (props) => {
  const [isHover, setIsHover] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  // implementing the logic to check for the focus and hover effects

  const focusInput = () => {
    setIsFocused(true);
  };

  const unfocusInput = () => {
    setIsFocused(false);
  }

  const hoverInputEnter = () => {
    setIsHover(true);
  };

  const hoverInputLeave = () => {
    setIsHover(false);
  };

  // defining the styles inside the component

  const outerInputWrapper = {
    display: 'flex',
    'align-items': 'center',
    position: 'relative,'
  }

  const inputWrapper = {
    display: 'flex',
    'justify-content': 'center',
    'flex-direction': 'column',
  }

  const normalWidth = {
    width: 'fit-content'
  }

  const fullWidth = {
    width: '100%'
  }

  const inputFocus = {
    border: '1px solid  #2962FF',
  }

  const defaultSpan = {
    'padding': '4px',
    'font-size': '14px'
  }

  const errorSpan = {
    color: '#D32F2F'
  }

  const focusSpan = {
    color: '#2962FF'
  }

  const inputStyle = {
    border: '1px solid  #828282',
  }

  const inputHover = {
    border: '1px solid #333333 ',
  }

  const basicInput = {
    cursor: 'pointer',
    outline: 'none',
    'border-radius': '10px',
    'padding-top': '10px',
    'padding-left': '10px',
    'paddingBottom': '12px',
    'font-size': '14px',
    'font-weight': '500',
  }

  const defaultInputError = {
    border: '1px solid #D32F2F'
  }

  const disabled = {
    background: "linear-gradient(0deg, #E0E0E0, #E0E0E0),linear-gradient(0deg, #F2F2F2, #F2F2F2)",
    border: '1px solid transparent',
    'cursor': 'not-allowed'
  }

  const helperTextError = {
    color: '#D32F2F'
  }

  const helperTextDefault = {
    'font-size': '12px',
    'padding': '4px'
  }

  //size classes, did not create anything for medium because medium is the default
  const smallSize = {
    'padding': '7px 8px'
  }
  const largeSize = {
    'padding': '15px 8px'
  }

  const startIconStyle = {
    position: 'absolute',
    display: 'flex',
    'align-items': 'center',
    'margin-left': '5px',
  }

  const endIconStyle = {
    position: 'absolute',
    display: 'flex',
    'align-items': 'center',
    transform: 'translate(9em)'
  }

  const specialStartIconPlaceholder = {
    color: 'grey',
    'margin-left': '3px'
  }

  // creating functions to combined the constants above so the input and label have the right styles

  function styleLabel() {
    let style;

    if (isFocused) {
      if (props.error) {
        style = { ...defaultSpan, ...errorSpan }
      } else {
        style = { ...defaultSpan, ...focusSpan }
      }
    } else if (isHover) {
      style = defaultSpan
    }
    else {
      if (props.error) {
        style = { ...defaultSpan, ...errorSpan }
      } else {
        style = defaultSpan
      }
    }

    return style
  }


  function styleInput() {
    let style;

    if (props.disabled) {
      style = { ...basicInput, ...disabled }
    }
    else {
      if (isFocused) {
        if (props.error) {
          style = { ...basicInput, ...defaultInputError }
        } else {
          style = { ...basicInput, ...inputFocus }
        }
      } else if (isHover) {
        style = { ...basicInput, ...inputHover }
      }
      else {
        if (props.error) {
          style = { ...basicInput, ...defaultInputError }
        } else {
          style = { ...basicInput, ...inputStyle }
        }
      }
    }
    if (props.fullWidth) {
      style = { ...style, ...fullWidth }
    } else {
      style = { ...style, ...normalWidth }
    }
    if (props.size) {
      if (props.size === 'sm') {
        style = { ...style, ...smallSize }
      }
      if (props.size === 'lg') {
        style = { ...style, ...largeSize }
      }
    }
    if (props.multiline) {
      return { ...style, ... { 'resize': 'none' } }
    } else {
      return style
    }
  }

  return (
    <div style={inputWrapper} >
      <span style={styleLabel()}>{props.label}</span>

      {/* checking if the props require a textarea or an input */}
      {props.multiline ?

        <textarea rows={props.rows} placeholder={props.value} style={...styleInput()}
          onMouseEnter={hoverInputEnter}
          onMouseLeave={hoverInputLeave}
          onFocus={focusInput}
          onBlur={unfocusInput}
          disabled={props.disabled ? true : false}
        />

        :

        <span>

          {/* checking if the input's normal palceholder can be used or if the starticon prop requires a fake, span-placeholder */}

          {props.startIcon ?
            <span style={outerInputWrapper}>
              <span v-if={props.startIcon} style={startIconStyle} >
                <MaterialIcon icon={props.startIcon} size={28} />
                <span style={specialStartIconPlaceholder}> {props.value}</span>
              </span>
              <input style={styleInput()}
                onMouseEnter={hoverInputEnter}
                onMouseLeave={hoverInputLeave}
                onFocus={focusInput}
                onBlur={unfocusInput}
                disabled={props.disabled ? true : false}
              />
            </span>

            :

            <span style={outerInputWrapper}>
              <input placeholder={props.value} style={styleInput()}
                onMouseEnter={hoverInputEnter}
                onMouseLeave={hoverInputLeave}
                onFocus={focusInput}
                onBlur={unfocusInput}
                disabled={props.disabled ? true : false}
              />
              <span style={endIconStyle} >
                <MaterialIcon icon={props.endIcon} size={28} />
              </span>
            </span>
          }
        </span>

      }

      <span style={props.error ? { ...helperTextDefault, ...helperTextError } : helperTextDefault}>{props.helperText}</span>
    </div>
  )
};

// defining proptypes
InputComponent.propTypes = {
  label: PropTypes.string,
  helperText: PropTypes.string,
  value: PropTypes.string,
  fullWidth: PropTypes.bool,
  multiline: PropTypes.bool,
  rows: PropTypes.number,
  disabled: PropTypes.bool,
  size: PropTypes.string,
  startIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  endIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
}

// defining default props

InputComponent.defaultProps = {
  label: "My Label",
  value: 'My placeholder'
}

export default InputComponent;