import React from 'react';
import './ServiceBox2.css';
import '../App.css';

function ServiceBox2(props){
  return(
    <div className="services-box services-box-2">
      <div className="service-box-img">
      <div className="service-icon-background-2">
        {props.icon}
      </div>
      </div>
      <h4>{props.title}</h4>
      <p className="mb-12">{props.text1}</p>
      <p>{props.text2}</p>
    </div>
  );
}

export default ServiceBox2;
