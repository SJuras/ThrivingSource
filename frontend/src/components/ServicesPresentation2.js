import React from 'react';
import '../App.css';
import './ServicesPresentation2.css';
import ServiceBox2 from './ServiceBox2';
import { FaRegFileAlt, FaStoreAlt, FaMapMarkerAlt } from "react-icons/fa";


function ServicesPresentation2(props){
  return(
    <section>
      <div className="row mb-18">
        <div className="middle-section">
          <div className="middle-box">
            <h2 className="mb-12">{props.mainTitle}</h2>
            <p>{props.text1}</p>
            <p>{props.text2}</p>
            <p>{props.text3}</p>
            <p>{props.text4}</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="services-wrapper">
          <ServiceBox2
            icon=<FaRegFileAlt size="3em" style={{color: "#fff", marginBottom: "-4px"}}/>
            title="On-page SEO"
            text1="Using tested and proven methods of optimizing your website to rank higher on search engines"
            text2=""
          />
          <ServiceBox2
            icon=<FaStoreAlt size="3em" style={{color: "#fff", marginBottom: "-4px"}}/>
            title="Off-page SEO"
            text1="Fortifying the trust in your brand and your website with set of off-website actions and activities."
            text2="Rank higher on search engines and get discoevered by wider audience"
          />
          <ServiceBox2
            icon=<FaMapMarkerAlt size="3em" style={{color: "#fff", marginBottom: "-4px"}}/>
            title="SEO range"
            text1="Growing local businesses greately benefit from local and hyperlocal SEO."
            text2="Become a go-to place in your community for your respected business activity"
          />
        </div>
      </div>
    </section>
  );
}

export default ServicesPresentation2
