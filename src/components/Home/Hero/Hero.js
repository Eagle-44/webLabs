import React from "react";
import "./hero.css";
import circ from "..//..//..//img/circus.jpg"

const Hero = () => (
    <div className="hero_container">
        <img className="circus_hero" src={circ} alt="circus"></img>
        <div className="text_hero">
            <h2>Welcome to the Circus Page</h2>
            <p className="paragraph">
            Circus is a travelling company of acrobats, clowns, 
            and other entertainers which gives performances, 
            typically in a large tent, in a series of different places
            </p>
        </div>
    </div>
);

export  default Hero;