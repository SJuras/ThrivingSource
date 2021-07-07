import React from 'react';
import '../App.css';
import './PainPointsHolder.css';
import { Link } from 'react-router-dom';
import {Button} from './Button';
import { FaHandshake, FaChartLine, FaUsers } from 'react-icons/fa';
import PainPoint from './PainPoint';

function PainPointsHolder() {
  return(
    <section>
      <div className="row center-2 mb-24">
          <p>Our deliverables are focused on 3 major online business pain-point areas:</p>
      </div>
      <div className="row mb-30">
        <PainPoint
        icon=<FaHandshake size="6em"/>
        title="Client Acquisition"
        text="Together we develop a strategy to market your products and services to new customers, then our team takes actionable steps to meet your goals."/>

        <PainPoint
        icon=<FaChartLine size="6em"/>
        title="Client Service Upgrade"
        text="Decrease customer churn by improving your offers and providing a more satisfying customer experience. We'll analyze your data and make a targeted plan to improve aspects your customers see as barriers to purchase."/>

        <PainPoint
        icon=<FaUsers size="6em"/>
        title="Client Retention"
        text="Engage, delight and reward your customers for their loyalty to prevent churn. A happy customer is your biggest supporter and your best reference."/>
      </div>
      <div className="row center-2">
        <Link to='/services' className='btn btn-primary'>Our Services</Link>
        <Link to='/products' className='btn btn-primary btn-middle'>Our Products</Link>
        <Link to='/contact' className='btn btn-primary'>Contact Us</Link>
      </div>
    </section>
  );
}


export default PainPointsHolder
