import React from 'react';
import './ServiceBox1.css';
import '../App.css';

function ServiceBox1(props){
  return(
    <div className="services-box services-box-1">
      <div className="service-box-img">
        <div className="service-icon-background-1">
          {props.icon}
        </div>
      </div>
      <h4>{props.title}</h4>
      <p className="mb-12">{props.text1}</p>
      <p>{props.text2}</p>
    </div>
  );
}

export default ServiceBox1;
