import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from "react-icons/fa";
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import {Button} from './Button';
import mainLogo from '../Images/mainLogo.png';
// import Logo from '../../public/Images/logoHeader.png';

function Navbar() {

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return(
    <header>
        <div className="navbar">
          <div className="menu-main">
            <Link to="/">
              <div className="logo-container">
                <img src={mainLogo} />
              </div>
            </Link>
            <Link to="#" className="menu-bars">
              <div className="menu-btn-container">
                <FaBars onClick={showSidebar} style={{marginBottom: "-5px"}}/>
              </div>
            </Link>
          </div>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars" style={{color: "#fff", fontSize: "2.6em", margin: "10px"}}>
                <FaTimes />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return(
                <li key={index} className={item.cName}>
                  <Link className="navbar-links" to={item.path}>

                    <span>{item.title}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
    </header>
  );
}

export default Navbar
