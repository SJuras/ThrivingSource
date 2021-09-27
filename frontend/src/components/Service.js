import React from 'react';
import './Service.css';
import '../App.css';

function Service(props) {
  return(
    <div className="service-box">
      <div className="service-box-img">
        <img src={props.src} />
      </div>
      <h3>{props.header3}</h3>
      <h2>{props.header2}</h2>
      <p>{props.text1}</p>
      <p>{props.text2}</p>
      <p>{props.text3}</p>
    </div>
  );
}

export default Service
