import React from 'react';
import '../App.css';
import './HeroSection.css';
import { Link } from 'react-router-dom';
import {Button} from './Button';
import video from '../videos/video1.mp4';

function HeroSection() {
  return(
    <div>
    <div className="banner">
      <video src={video} autoPlay loop muted />
      <div className="banner-btn-container">
        <div className="btn-surround">
          <Link to='/tour' className='btn btn-blue'>Take a Tour</Link>
        </div>
        <div className="btn-surround">
          <Link to='/contact' className='btn btn-pink'>Contact Us</Link>
        </div>
      </div>
    </div>
    </div>
  );
}

export default HeroSection;
