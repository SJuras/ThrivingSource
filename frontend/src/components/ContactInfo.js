import React from 'react';
import './ContactInfo.css';
import '../App.css';
import { FaCheckSquare, FaTimesCircle, FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube, FaMapMarkerAlt, FaRegEnvelope, FaPhoneAlt  } from 'react-icons/fa';

function ContactInfo(){
  return(
    <section>
      <div class="heading">
        <h3>Looking forward doing business with you</h3>
      </div>
      <div class="row">
        <div class="service-box">
          <h4 class="contact-title">Contact info: </h4>
          <ul class="mb-18">
            <li><FaMapMarkerAlt style={{marginBottom: "-3px"}}/> #1104-1252 Hornby St,<br /> Vancouver, BC <br />V6Z 0A3</li>
            <li><FaPhoneAlt style={{marginBottom: "-3px"}}/> 222-3333-44444</li>
            <li><FaRegEnvelope style={{marginBottom: "-3px"}}/> info@thriving-source.com</li>
          </ul>
        </div>
        <div class="service-box">
          <h4 class="contact-title">Office hours:</h4>
          <ul>
            <li>Monday - Friday: 09am - 5pm PST</li>
            <li><FaCheckSquare color="#3f3485" style={{marginBottom: "-2px"}}/> Online appointments</li>
            <li><FaTimesCircle color="#e5447a" style={{marginBottom: "-2px"}}/> On-site services</li>
          </ul>
        </div>
      </div>
      <div class="row row-2 ml-10 mr-10">
        <div class="social-box">
          <h4>Follow us on social media:</h4>
          <ul>
            <li><a href="#"><FaFacebookF className="soc-media-icon" /></a></li>
            <li><a href="https://www.instagram.com/thrivingsource/"><FaInstagram className="soc-media-icon" /></a></li>
            <li><a href="https://twitter.com/ThrivingSource?ref_src=twsrc%5Etfw"><FaTwitter className="soc-media-icon" /></a></li>
            <li><a href="#"><FaLinkedinIn className="soc-media-icon" /></a></li>
            <li><a href="https://www.youtube.com/channel/UCTg1yb-D2GM5sgjdmfDVSrA"><FaYoutube className="soc-media-icon" /></a></li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ContactInfo
