import React from 'react';
import '../App.css';
import './SitemapBoxes.css';

function SitemapBox(props) {
  return(
    <div className="sitemap-box">
      <h4>{props.title}</h4>
      <ul>
        <li>{props.link1}</li>
        <li>{props.link2}</li>
        <li>{props.link3}</li>
        <li>{props.link4}</li>
        <li>{props.link5}</li>
      </ul>
    </div>
  );
}

export default SitemapBox
