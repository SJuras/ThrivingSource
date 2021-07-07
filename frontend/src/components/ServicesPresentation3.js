import React from 'react';
import '../App.css';
import './ServicesPresentation3.css';
import ServiceBox3 from './ServiceBox3';
import { FaPencilAlt } from "react-icons/fa";


function ServicesPresentation3(props){
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
          <ServiceBox3
            icon=<FaPencilAlt size="3em" style={{color: "#fff"}}/>
            title="Copywriting"
            text1="Catchy text for your website, marketing material and social media posts and content."
          />
          <ServiceBox3
            title="Logo Design"
            text1="Unique logo design is the first thing that people see about your brand."
          />
          <ServiceBox3
            title="Graphic Solutions"
            text1="Having a modern website is a must for building your business."
          />
        </div>
      </div>
    </section>
  );
}

export default ServicesPresentation3
