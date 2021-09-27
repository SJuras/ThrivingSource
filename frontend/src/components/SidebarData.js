import React from 'react';
import { FaBars, FaTimes, FaHome, FaCoffee, FaAngleDoubleRight, FaWrench, FaBoxes, FaEnvelope } from "react-icons/fa";

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <FaHome />,
    cName: 'nav-text'
  },
  {
    title: 'About Us',
    path: '/about',
    icon: <FaCoffee />,
    cName: 'nav-text'
  },
  {
    title: 'Tour',
    path: '/tour',
    icon: <FaAngleDoubleRight />,
    cName: 'nav-text'
  },
  {
    title: 'Services',
    path: '/services',
    icon: <FaWrench />,
    cName: 'nav-text'
  },
  {
    title: 'Products',
    path: '/products',
    icon: <FaBoxes />,
    cName: 'nav-text'
  },
  {
    title: 'Contact Us',
    path: '/contact',
    icon: <FaEnvelope />,
    cName: 'nav-text'
  }
]
