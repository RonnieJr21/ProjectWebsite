import React from "react";
import './LandingPage.css'
import MyNavbar from "../navbar/navbar";

const LandingPage = () => {

    return(
            <div className="App">
                <MyNavbar/>
                <div className={'filler'}></div>
                <div className="top-div">
                    <span><img className="ufo" src={require("../images/cartoonSpaceship.png")} alt="ufo"/></span>

                    <h1 className="name">I'm Ronnie.</h1>

                    <p className="title">A Software Engineer</p>

                    <img className="astronaut" src={require("../images/astronaut-on-moon.png")} alt="astro"/>
                </div>

                <div className="middle-div"></div>

                <div className="bottom-div"></div>
            </div>
    )
}
export default LandingPage