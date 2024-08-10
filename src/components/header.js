import React from "react";
import potrait from "../images/harsha.jpg"
import linkedinIcon from "../images/linkedin.png"
import mailIcon from "../images/Mail Icon.png"

export default function Header() {
    return(
        <div className="header-container">
            <img src={potrait} className="potrait" width="317" height="317" alt=""/>
            <div className="intro-text">
                <h1>Sai Sreeharsha Bolloju</h1>
                <span className="web-dev">Web Developer</span>
                <a href="http://sreeharsha.website" className="website" target="_blank" rel="noopener noreferrer">
                    sreeharsha.website
                </a>
            </div>
            <div className="header-buttons">
                <a href="mailto:sreeh190206@gmail.com" target="_blank" rel="noopener noreferrer" className="email-button">
                    <img src={mailIcon} className="email-icon" alt=""/>
                    <span className="button-text">Email</span>
                </a>
                <a href="https://www.linkedin.com/in/bolloju-sai-sreeharsha-a3146a294/" target="_blank" rel="noopener noreferrer" className="linkedin-button">
                    <img src={linkedinIcon} className="linkedin-icon" alt=""/>
                    <span className="button-text">Linkedin</span>  
                </a>
            </div>
        </div>  
    )
}