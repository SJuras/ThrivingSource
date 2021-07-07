import React from 'react';
import '../App.css';
import './ServicesPresentation.css';
import ServiceBox1 from './ServiceBox1';
import { FaLaptop, FaCropAlt, FaPalette, FaTools, FaCogs, FaHeadset } from "react-icons/fa";


function ServicesPresentation(props){
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
          <ServiceBox1
            icon=<FaLaptop size="3em" style={{color: "#fff", marginBottom: "-4px"}}/>
            title="Website Design"
            text1="Having a modern website is a must for building your business."
            text2="We will bring your online business identity to life"
          />
          <ServiceBox1
            icon=<FaCropAlt size="3em" style={{color: "#fff", marginBottom: "-4px"}}/>
            title="Logo Design"
            text1="Unique logo design is the first thing that people see about your brand."
          />
          <ServiceBox1
            icon=<FaPalette size="3em" style={{color: "#fff", marginBottom: "-4px"}}/>
            title="Graphic Solutions"
            text1="Having a modern website is a must for building your business."
          />
          <ServiceBox1
            icon=<FaTools size="3em" style={{color: "#fff"}}/>
            title="Redesign"
            text1="Want to update your brand's look and feel, rebranding? Latest trends of design available to you."
          />
          <ServiceBox1
            icon=<FaCogs size="3em" style={{color: "#fff", marginBottom: "-4px"}}/>
            title="Modernization"
            text1="Your website should be up to date and with latest trends, technologies and design-wise."
          />
          <ServiceBox1
            icon=<FaHeadset size="3em" style={{color: "#fff"}}/>
            title="Support"
            text1="We keep things smooth and running, so you don't have to."
          />
        </div>
      </div>
    </section>
  );
}

export default ServicesPresentation
