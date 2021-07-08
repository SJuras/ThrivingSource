import React from 'react';
import '../App.css';
import './Footer.css';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube, FaMapMarkerAlt, FaRegEnvelope, FaPhoneAlt  } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logoFooter from '../Images/logoFooter.png'


function Footer() {
  return(
    <footer>
      <div className="row">
        <div className="footer-title mb-24">
          <div className="footer-logo">
            <div className="footer-logo-img">
              <img src={logoFooter} />
            </div>
          </div>
          <div className="footer-title-text">
            <h2>ThrivingSource</h2>
          </div>
        </div>
      </div>
      <div className="row row-main mb-24">
        <div className="footer-half footer-half-1">
          <div className="footer-box">
            <h4>Navigation</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/tour">Tour</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>
          <div className="footer-box">
            <h4>Useful Links</h4>
            <ul>
              <li><Link to="/tour">How does this work</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/sitemap">Sitemap</Link></li>
            </ul>
          </div>
          <div className="footer-box">
            <h4>Legal</h4>
            <ul>
              <li><Link to="/terms">Terms of Service</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-half footer-half-2 column">
          <div className="contact-info">
            <h5>Contact info:</h5>
            <ul>
              <li><FaMapMarkerAlt style={{marginBottom: "-3px", marginRight: "6px"}}/> Vancouver, BC</li>
              <li><FaRegEnvelope style={{marginBottom: "-3px", marginRight: "6px"}}/> info@thriving-source.com</li>
              <li><FaPhoneAlt style={{marginBottom: "-3px", marginRight: "6px"}}/> 222-334-5567</li>
            </ul>
          </div>
          <div className="soc-media">
            <h5>Follow us:</h5>
            <ul>
              <li><a href="https://www.facebook.com/profile.php?id=100070238389211"><FaFacebookF className="soc-media-icon" /></a></li>
              <li><a href="https://www.instagram.com/thrivingsource/"><FaInstagram className="soc-media-icon" /></a></li>
              <li><a href="https://twitter.com/ThrivingSource?ref_src=twsrc%5Etfw"><FaTwitter className="soc-media-icon" /></a></li>
              <li><a href="#"><FaLinkedinIn className="soc-media-icon" /></a></li>
              <li><a href="https://www.youtube.com/channel/UCTg1yb-D2GM5sgjdmfDVSrA"><FaYoutube className="soc-media-icon" /></a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row space-bet">
        <p>&copy; ThrivingSource 2021.</p>
        <p>Made with <span>&#10084;</span> by: ThrivingSource Team</p>
      </div>
    </footer>
  );
}

export default Footer;
