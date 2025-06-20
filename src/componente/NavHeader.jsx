// src/components/NavHeader.jsx
import React from "react";

export default function NavHeader({ toggleNav }) {
  return (
    <div className="nav-header">
      <div className="nav-brand">
        <img src="https://s3-us-west-2.amazonaws.com/parallax-theme/assets/bradlogo2.png" alt="Brand Logo" />
      </div>
      <i className="fa fa-bars fa-3x" onClick={toggleNav}></i>
      <div className="header-links">
        <ul>
          <li data-menuanchor="fourthPage"><a href="#contact">CONTACT</a></li>
          <li data-menuanchor="thirdPage"><a href="#portfolio">PORTFOLIO</a></li>
          <li data-menuanchor="secondPage"><a href="#about">ABOUT</a></li>
        </ul>
      </div>
    </div>
  );
}