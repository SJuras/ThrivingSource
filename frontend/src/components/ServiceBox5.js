import React from 'react';
import './ServiceBox5.css';
import '../App.css';

function ServiceBox5(props){
  return(
    <div className="services-box services-box-5">
      <div className="service-box-img">
        <div className="service-icon-background-5">
          {props.icon}
        </div>
      </div>
      <h4 className="mb-18">{props.title}</h4>
      <p className="mb-12">{props.text1}</p>
      <p>{props.text2}</p>
    </div>
  );
}

export default ServiceBox5;
