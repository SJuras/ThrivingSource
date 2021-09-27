import React from 'react';
import './ServiceBox3.css';
import '../App.css';

function ServiceBox3(props){
  return(
    <div className="services-box services-box-3">
      <div class="service-box-img">
      <div className="service-icon-background-3">
        {props.icon}
      </div>
      </div>
      <h4>{props.title}</h4>
      <p>{props.text1}</p>
      <p>{props.text2}</p>
    </div>
  );
}

export default ServiceBox3;
