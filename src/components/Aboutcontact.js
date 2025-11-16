import "./Aboutcontactstyle.css";
import React from "react";
import { Link } from "react-router-dom";
import Calculator from "../assets/calculator.png";
import Coffee from "../assets/coffee.png";
const Aboutcontact = () => {
    return (
        <div className="about">
            <div className="left">
                <h1>Who am I?</h1>
                <p>React Developer</p>

                <Link to="/contact">
                    <button className="btn">Contact</button>
                </Link>
            </div>

            <div className="right">
              <div className="img-container">
                <div className="img-stact top">
                    <img src={Calculator} className="img" alt="true"/>
                </div>
                     <div className="img-stact bottom">
                    <img src={Coffee} className="img" alt="true"/>
                </div>
              </div>
            </div>
        </div>
    );
};

export default Aboutcontact;
