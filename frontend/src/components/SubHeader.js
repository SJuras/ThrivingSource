import React from 'react';
import '../App.css';
import './SubHeader.css';


function SubHeader(props) {
  return(
    <section className="sub-header">
      <h2>{props.title}<span>{props.span}</span></h2>
      <p>{props.text}</p>
    </section>
  );
}

export default SubHeader;
