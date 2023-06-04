import React from "react";
import './Navbar.scss';

export default function Navbar() {
  return (
    <>
      <div className="name">
        Mathew Steenwinkel
        <div className="nav">
          <a>
            HOME
          </a>
          <a>
            PORTFOLIO
          </a>
          <a>
            CONTACT
          </a>
        </div>
      </div>
      <div class="line-container">
        <div class="horizontal-line"></div>
      </div>
    </>
  )
}