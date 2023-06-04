import React from "react";
import "./Hero_image.scss"
import TechStack from "./TechStack";


export default function HeroImage() {



  return (
    <>
      <div className="wrapper">
        <header>
        <div className="background">
          <img src={require("../images/Mountain.png")} className="mountain" />
        </div>
        <div className="foreground">
          <img src={require("../images/Forest.png")} className="forest" />
        </div>
        </header>
        <TechStack />
      </div>
     
    </>
  );
}
