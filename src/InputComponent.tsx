
import * as React from 'react'
import { useState } from 'react'
import { PropTypes } from 'prop-types'

const InputComponent = (props) => {
  const [isHover, setIsHover] = useState(false);
  const [isFocused, setIsFocused] = useState(false);


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
  const inputWrapper = {
    display: 'flex',
    'justify-content': 'center',
    'flex-direction': 'column',
    // width:'fit-content' //make it with return 100%
  }
  const normalWidth = {
    width: 'fit-content'
  }

  const fullWidth = {
    // 'min-width':'500vw !important'
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
    'cursor': 'default'

  }

  const helperTextError = {
    color: '#D32F2F'
  }

  const helperTextDefault = {
    'font-size': '12px',
    'padding':'4px'
  }


  //size classes, did not create anything for medium because medium is the default
  const smallSize = {
    'padding': '7px 8px'
  }
  const largeSize = {
    'padding': '15px 8px'
  }



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
      {props.multiline ?

        <textarea rows={props.rows} placeholder={props.value} style={...styleInput()}
          onMouseEnter={hoverInputEnter}
          onMouseLeave={hoverInputLeave}
          onFocus={focusInput}
          onBlur={unfocusInput}
          disabled={props.disabled ? true : false}

        />
        :
        <input placeholder={props.value} style={styleInput()}
          onMouseEnter={hoverInputEnter}
          onMouseLeave={hoverInputLeave}
          onFocus={focusInput}
          onBlur={unfocusInput}
          disabled={props.disabled ? true : false}
        />}

      <span style={props.error ? { ...helperTextDefault, ...helperTextError } : helperTextDefault}>{props.helperText}</span>
    </div>
  )
};

InputComponent.propTypes = {
  label: PropTypes.string,
  helperText: PropTypes.string,
  value: PropTypes.string,
  fullWidth: PropTypes.boolean,
  multiline: PropTypes.boolean,
  rows: PropTypes.number,
  disabled: PropTypes.boolean,
  size: PropTypes.string

  // to be added: icon


}

InputComponent.defaultProps = {
  label: "My Label",
  value: 'Placeholder'
}
export default InputComponent;