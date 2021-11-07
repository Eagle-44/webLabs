import React from "react";
import Hero from "./Hero/Hero.js";
import Intro from "./Intro/Intro.js";


const Home = (props) => {
    return (
        <div>
            <Hero/>
            <Intro circus={props.circus}/>
        </div>
    );
};

export default Home;