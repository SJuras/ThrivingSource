import React from 'react';
import '../App.css';
import { Button } from './Button';
import './TextPresentation.css';

function TextPresentation(props){
  return(
    <section>
      <div className="row row-2">
        <div className="content-box">
          <h3>{props.title}</h3>
          <h1 className="mb-18">
            {props.mainTitle}
          </h1>
          <p>{props.text1}</p>
          <p>{props.text2}</p>
          <p>{props.text3}</p>
          <p>{props.text4}</p>
        </div>
        <div className="content-box">
          <div className="center">
            <div className="content-box-img">
              <img src={props.src} alt="business success" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TextPresentation
