import React from "react";
import Logo from "../images/Logo.png";
import Security from "../images/security.png";
import Typed from "react-typed";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Header(){
    return (<header>
        <hr />
        <img src={Logo} alt="logo" />
        <button className="nav-item">Home</button>
        <button className="nav-item">Features</button>
        <button className="nav-item">Stories</button>
        <button className="nav-item">About</button>
        <button className="download">Get Extension
        <ArrowForwardIcon style={{width: "2vw", position:"relative", top:"0.3vw"}} />
        </button>
        <hr />
        <div className="animated-typing">
            <p className="heading">Proactive Fraud Protection</p>
            <br />
        <Typed
        strings={["Starts Here."]}
        typeSpeed={100}
        backSpeed={100}
        loop
        />
        <br />
        <p className="sub-para">Fortify Your Online Presence with our Google Chrome Extension for Unrivaled Fraud Protection.</p>
        
        </div>
        <img className="security" src={Security} alt="" />
    </header>)
}

export default Header;