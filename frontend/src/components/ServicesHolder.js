import React from 'react';
import '../App.css';
import './ServicesHolder.css';
import Service from './Service';
import { Link } from 'react-router-dom';
import {Button} from './Button';
import servicePicDesign from '../Images/design.png';
import servicePicModern from '../Images/modern.png';
import servicePicCopy from '../Images/copyWr.png';
import servicePicBrand from '../Images/brand.png';

function ServicesHolder(){
  return(
    <section>
      <div class="row">
        <Service
        src={servicePicDesign}
        header3="Website"
        header2="Getting your website up and running"
        text1="Web Design"
        text2="Logo Design"
        text3="Graphic Solutions"
         />
         <Service
         src={servicePicModern}
         header3="Support"
         header2="Keeping things smooth and running"
         text1="Redesign"
         text2="Modernization"
         text3="Maintenance & Support"
          />
      </div>
      <div class="row mb-18">
        <Service
        src={servicePicCopy}
        header3="Content"
        header2="We provide you with content"
        text1="Copywriting"
        text2="Content Design & Managment"
        text3="SEO"
         />
         <Service
         src={servicePicBrand}
         header3="Marketing"
         header2="Building your brand"
         text1="Social Media Marketing"
         text2="Email Marketing"
         text3="Facebook & Google Ads"
          />
      </div>
      <div className="btn-container p-10">
        <p className="mb-12">For more information about our services:</p>
        <Link to='/services' className='btn btn-primary'>Our Services</Link>
      </div>
    </section>
  );
}

export default ServicesHolder
