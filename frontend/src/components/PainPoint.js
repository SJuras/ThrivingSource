import React from 'react';
import './PainPoint.css';
import '../App.css';

function PainPoint(props) {
  return(
    <div className="pain-points">
      {props.icon}
      <h2>{props.title}</h2>
      <p>
        {props.text}
      </p>
    </div>
  );
}

export default PainPoint
