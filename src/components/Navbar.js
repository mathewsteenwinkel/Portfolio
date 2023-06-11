import React from "react";
import './Navbar.scss';
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link"


export default function Navbar() {
  return (
    <BrowserRouter>
      <div className="name">
        Mathew Steenwinkel
        <div className="nav">
          <a href="../public/Mathew_Steenwinkel_Resume_29-05-2023-16-37-21.pdf" download className="nav" >
            RESUME
          </a>
          <Link to='#portfolio' smooth className="nav">
            PORTFOLIO
          </Link>
          <Link to='#contactMe' smooth className="nav">
            CONTACT
          </Link>
        </div>
      </div>
      <div class="line-container">
        <div class="horizontal-line"></div>
      </div>
    </BrowserRouter>
  )
}