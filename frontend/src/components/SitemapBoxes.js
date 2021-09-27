import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import './SitemapBoxes.css';
import SitemapBox from './SitemapBox';

function SitemapBoxes(){
  return(
    <section>
      <div className="row">
      <SitemapBox
        title="Main Content"
        link1=<Link to="/">Home</Link>
        link2=<Link to="/tour">Tour</Link>
        link3=<Link to="/services">Services</Link>
        link4=<Link to="/products">Products</Link>
        link5=<Link to="/contact">Contact Us</Link>
      />
      <SitemapBox
        title="Legal"
        link1=<Link to="/about">About Us</Link>
        link2=<Link to="/terms">Terms of Services</Link>
        link3=<Link to="/privacy">Privacy Policy</Link>
      />
      <SitemapBox
        title="Utility"
        link1=<Link to="/sitemap">Sitemap</Link>
      />
      </div>
    </section>
  );
}

export default SitemapBoxes
