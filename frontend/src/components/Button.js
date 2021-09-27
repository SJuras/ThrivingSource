import React from 'react';
import './Button.css';
import {Link} from 'react-router-dom';

const STYLES = ['btn-primary', 'btn-blue', 'btn-pink'];

export const Button = ({children, type, onClick, buttonStyle}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

  return(
    <Link to='/' className=''>
      <button
        className={`btn ${checkButtonStyle}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};
