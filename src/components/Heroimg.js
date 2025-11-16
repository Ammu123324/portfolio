import "./Heroimg.css";
import React from 'react'
import IntroImg from "../assets/104.jpg";
import{ Link } from"react-router-dom";



const Hero = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img" src={IntroImg} alt="IntroImg"/> 
        </div>
      <div className="content">
      <p>HI,I'M A THENMOZHI</p>
      <h1>FULLSTACK DEVELOPER</h1>
      <div>
      <Link to="/project" className="btn">Projects</Link>
      <Link to="/contact" className=" btn btn-light">Contact</Link>


      </div>


      </div>
    </div>
  )
}


export default Hero
