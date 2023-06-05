import React from "react";
import "./Hero_image.scss"
import TechStack from "./TechStack";
import About from "./About"
import Blob from "./blob"
import Projects from "./Projects";


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
        <About />
        <Blob />
        <div >
        <Projects />
        </div>
      </div>
     
    </>
  );
}
