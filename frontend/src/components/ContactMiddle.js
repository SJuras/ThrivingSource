import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import { FaEnvelope  } from 'react-icons/fa';
import '../App.css';
import './ContactMiddle.css';

function ContactMiddle(props){
  return(
    <section>
        <div className="row">
          <div className="middle-section">
            <div className="phone-button-content mb-18">
              <p>{props.text}</p>
              <p><FaEnvelope style={{marginBottom: "-4px", marginRight: "4px"}}/> {props.mail}</p>
              <a href="mailto:info@thriving-source.com" className='btn btn-primary'><FaEnvelope size="1.2em" style={{marginBottom: "-3px", marginRight: "8px"}}/>Send Mail</a>
            </div>
          </div>
        </div>
      </section>
  );
}

export default ContactMiddle
