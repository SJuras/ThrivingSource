import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import './logoHeader.css';
import logoHeader from '../Images/logoHeader.png';



function LogoHeader(props){
  return(
    <div className="logo-header">
      <Link to="/">
        <div className="logo-container">
          <img src={logoHeader} />
        </div>
        <div className="logo-text">
          <h2>Thriving<span>Source</span></h2>
        </div>
      </Link>
    </div>
  );
}

export default LogoHeader
