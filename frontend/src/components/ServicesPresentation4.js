import React from 'react';
import '../App.css';
import './ServicesPresentation4.css';
import ServiceBox4 from './ServiceBox4';


function ServicesPresentation4(props){
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
          <ServiceBox4
            title="Website Design"
            text1="Having a modern website is a must for building your business."
          />
          <ServiceBox4
            title="Logo Design"
            text1="Unique logo design is the first thing that people see about your brand."
          />
          <ServiceBox4
            title="Graphic Solutions"
            text1="Having a modern website is a must for building your business."
          />
        </div>
      </div>
    </section>
  );
}

export default ServicesPresentation4
