import * as React from 'react';
import InputComponent from './InputComponent'
import './style.css';

export default function App() {
  const subtitle = {
    color: 'gray',
    'font-style': 'italic',
    'font-size': '17px'
  }
  const react = {
    color: 'red'
  }
  const inputInfo = {
    'font-size': '18px',
    'font-weight': 'bold'
  }
  const footerDiv = {
    color:'darkred',
    padding:'30px 10px',
    'padding-top':'40px'
  }
  return (
    <div>


      <h1><span style={react}>React</span> Input Component Guideline</h1>
      <h3 style={subtitle}>coded by Pascu Ioana</h3>
      <li>
        <div style={inputInfo}>Normal input: no prop</div>
        <InputComponent />
      </li>

      <li>
        <div style={inputInfo}>Error input: {'<InputComponent error />'} </div>
        <InputComponent error />
      </li>

      <li>
        <div style={inputInfo}>Disabled input: {'<InputComponent disabled />'} </div>
        <InputComponent disabled />
      </li>

      <li>
        <div style={inputInfo}>Start Icon: {'<InputComponent  startIcon="face" />'} </div>
        <InputComponent startIcon='face' />
      </li>

      <li>
        <div style={inputInfo}>End Icon: {'<InputComponent endIcon="account_box" />'} </div>
        <InputComponent endIcon='account_box' />
      </li>

      <li>
        <div style={inputInfo}>HelperText added: {'<InputComponent helperText="Explain why you like cats" />'} </div>
        <InputComponent helperText="Explain why you like cats" />
      </li>

      <li>
        <div style={inputInfo}>HelperText and error combined: {'<InputComponent helperText="Explain why you like cats" error />'} </div>
        <InputComponent helperText="Explain why you like cats" error />
      </li>


      <li>
        <div style={inputInfo}>Custom placeholder: {'<InputComponent value="Special placeholder"/>'} </div>
        <InputComponent value="Special placeholder" />
      </li>


      <li>
        <div style={inputInfo}>Small size: {'<InputComponent size="sm" />'} </div>
        <InputComponent size='sm' />
      </li>

      <li>
        <div style={inputInfo}>Large size {'<InputComponent  size="lg"/>'} </div>
        <InputComponent size="lg" />
      </li>

      <li>
        <div style={inputInfo}>Full width: {'<InputComponent fullWidth/>'} </div>
        <InputComponent fullWidth />
      </li>

      <li>
        <div style={inputInfo}>Multiline: {'<InputComponent multiline rows="3"/>'} </div>
        <InputComponent multiline rows='3' />
      </li>

      <li>
        <div style={inputInfo}>Multiline error: {'<InputComponent multiline rows="5" error />'} </div>
        <InputComponent multiline rows='5' error />
      </li>


    <div style={footerDiv}>
      Challenge created by Pascu Ioana for <a href="https://devchallenges.io/challenges/TSqutYM4c5WtluM7QzG"> DevChallenges ➡️  Front End Developer Path </a> on StackBlitz
    </div>  
    </div>
  );
}
