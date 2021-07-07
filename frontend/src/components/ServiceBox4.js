import React from 'react';
import './ServiceBox4.css';
import '../App.css';

function ServiceBox4(props){
  return(
    <div className="services-box services-box-4">
      <div class="service-box-img">

      </div>
      <h4>{props.title}</h4>
      <p>{props.text1}</p>
      <p>{props.text2}</p>
    </div>
  );
}

export default ServiceBox4;
