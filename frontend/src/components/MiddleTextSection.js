import React from 'react';
import '../App.css';
import './MiddleTextSection.css';

function MiddleTextSection(props) {
  return(
    <section>
      <div className="row">
        <div className="middle-section">
          <div className="middle-box">
            <h3>{props.title}</h3>
            <p>{props.text}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MiddleTextSection
