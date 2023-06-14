import React from "react";
import './navbar.css'
import {Link} from "react-router-dom";

const MyNavbar = () => {
    return(
        <div className="navbar">
            <span><Link className="Home" to={"/"} > Home Page </Link></span>

            <span><Link className={"Projects"} to={'/projects'}>Projects</Link></span>

            <span><Link className="AboutMe" to={"/about-me"} > About me </Link></span>

            <span><Link className="Skills" to="./Skills/Skills.html"> Skills </Link></span>

            <span><Link className="contact" to={"/contact-me"}>Contact Me</Link></span>

        </div>
    );
}

export default MyNavbar