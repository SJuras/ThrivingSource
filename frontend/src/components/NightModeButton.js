import React, {useState} from 'react';
import './NightModeButton.css';
import {Button} from './Button';
import '../App.css';
import { LightTheme, DarkTheme, GlobalStyles } from '../themes.js';



function NightModeButton(){
  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };
  return(
    <button className="night-mode-toggler" onCLick={() => themeToggler()}>
      Night Mode
    </button>
  );
}

export default NightModeButton
