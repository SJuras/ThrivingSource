import React from 'react';
import '../App.css';
import './ServicesPresentation5.css';
import ServiceBox5 from './ServiceBox5';
import { FaGoogle, FaFacebook, FaEnvelopeOpenText, FaInstagram } from "react-icons/fa";


function ServicesPresentation5(props){
  return(
    <section>
      <div className="row mb-18">
        <div className="middle-section">
          <div className="middle-box">
            <h2 className="mb-12">{props.mainTitle}</h2>
            <p>{props.text1}</p>
            <p>{props.text2}</p>
            <p>{props.text3}</p>
            <p>{props.text4}</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="services-wrapper">
          <ServiceBox5
            icon=<FaGoogle size="3em" style={{color: "#fff", marginBottom: "-4px"}}/>
            title="Google Ads"
            text1="Your online business should be advertized on world's number one search engine."
            text2="Harness the power of Google Ads to bring attention to your website."
          />
          <ServiceBox5
            icon=<FaFacebook size="3em" style={{color: "#fff", marginBottom: "-4px"}}/>
            title="Facebook Ads"
            text1="Statistics show that most people find new merchants through Facebook."
            text2="Using catchy Facebook Ads will bring your business exposure to wide audience, local or global."
          />
          <ServiceBox5
            icon=<FaInstagram size="3em" style={{color: "#fff", marginBottom: "-4px"}}/>
            title="Instagram Ads"
            text1="Instagram Ads are super important right now"
          />
          <ServiceBox5
            icon=<FaEnvelopeOpenText size="3em" style={{color: "#fff"}}/>
            title="E-Mail Campaigns"
            text1="Having a modern website is a must for building your business."
          />
        </div>
      </div>
    </section>
  );
}

export default ServicesPresentation5
