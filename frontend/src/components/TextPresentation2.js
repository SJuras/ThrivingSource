import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './TextPresentation2.css';

function TextPresentation2(props) {
    return(
      <section>
        <div className="row row-2">
          <div className="content-box">
            <h3>{props.title}</h3>
            <p className="mb-18">{props.text1}</p>
            <p>{props.text2}</p>
            <p>{props.text3}</p>
            <p>{props.text4}</p>
            <p>{props.text5}</p>
            <p className="mb-12">{props.text6}</p>
            <div className="btn-container">
              <p className="mb-12">{props.textAboveButton}</p>
              <Link to={props.destination} className='btn btn-primary'>{props.btnText}</Link>
            </div>
          </div>
          <div className="content-box">
            <div className="center">
              <div className="content-box-img">
                <img src={props.src} />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default TextPresentation2
