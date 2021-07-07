import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import { FaPhoneAlt  } from 'react-icons/fa';
import '../App.css';
import './ContactMiddlePhone.css';



function ContactMiddlePhone(props) {

let windowWidth = window.innerWidth;
console.log(windowWidth);

  return(

      <section className="phone-part">
          <div className="row">
            <div className="middle-section">
              <div className="phone-button-content mb-18">
                <p>For any business related information, give us a call</p>
                <p><FaPhoneAlt style={{marginBottom: "-4px", marginRight: "4px"}}/> 222-3333-44444</p>
                <a href="tel:+15555551212" className='btn btn-primary'><FaPhoneAlt color="white" style={{marginBottom: "-3px", marginRight: "8px"}}/>Call Us</a>
              </div>
            </div>
          </div>
        </section>
  );
}

export default ContactMiddlePhone
