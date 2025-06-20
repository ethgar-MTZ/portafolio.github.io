import React from "react";

export default function NavScreen({ closeNav }) {
  return (
    <div className="nav-screen">
      <i className="fa fa-times fa-3x" onClick={closeNav}></i>
      <div className="nav-container">
        <div className="nav-links">
          <ul id="myMenu">
            <li data-menuanchor="secondPage"><a href="#about">ABOUT</a></li>
            <li data-menuanchor="thirdPage"><a href="#portfolio">PORTFOLIO</a></li>
            <li data-menuanchor="fourthPage"><a href="#contact">CONTACT</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}