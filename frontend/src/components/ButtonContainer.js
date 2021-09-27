import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './ButtonContainer.css';


function ButtonContainer(props){
  return(
    <section>
      <div className="btn-container p-10">
        <p className="mb-12">{props.text}</p>
        <Link to={props.destination} className='btn btn-primary'>{props.btnText}</Link>
      </div>
    </section>
  );
}

export default ButtonContainer
