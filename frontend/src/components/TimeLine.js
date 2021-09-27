import React from 'react';
import '../App.css';
import './TimeLine.css';
import { FaCheck, FaChevronUp  } from 'react-icons/fa';

function TimeLine() {
  return(
    <section>
      <div className="wrapper">

        <div className="center-line">
          <a href="#howitworks" className="scroll-icon"><FaChevronUp /></a>
        </div>

        <div className="red red-1">
          <div className="part part-1 col-1">
              <span className="part-num"><FaCheck /></span>
              <div className="details">
                <span className="title">Step 1</span>
              </div>
              <h4>Goal Setting</h4>
              <p>First, let's establish Your goals</p>
          </div>
        </div>

        <div className="red red-2">
          <div className="part part-2 col-2">
            <span className="part-num"><FaCheck /></span>
            <div className="details">
              <span className="title">Step 2</span>
            </div>
            <h4>Creation</h4>
            <p>Now, we get to work, prepairing everything</p>
          </div>
        </div>

        <div className="red red-1">
          <div className="part part-1 col-3">
            <span className="part-num"><FaCheck /></span>
            <div className="details">
              <span className="title">Step 3</span>
            </div>
            <h4>Review</h4>
            <p>We submit for Your review</p>
          </div>
        </div>

        <div className="red red-2">
          <div className="part part-2 col-4">
            <span className="part-num"><FaCheck /></span>
            <div className="details">
              <span className="title">Step 4</span>
            </div>
            <h4>Development</h4>
            <p>We develop Your idea</p>
          </div>
        </div>

        <div className="red red-1">
          <div className="part part-1 col-5">
            <span className="part-num"><FaCheck /></span>
            <div className="details">
              <span className="title">Step 5</span>
            </div>
            <h4>Revision</h4>
            <p>Again, we revise, just to be sure</p>
          </div>
        </div>

        <div className="red red-2">
          <div className="part part-2 col-4">
            <span className="part-num"><FaCheck /></span>
            <div className="details">
              <span className="title">Step 6</span>
            </div>
            <h4>Delivery</h4>
            <p>And we deliver</p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default TimeLine
