import React from "react";
import potrait from "../images/harsha.jpg"
import linkedinIcon from "../images/linkedin.png"
import mailIcon from "../images/Mail Icon.png"

export default function Header() {
    return(
        <div className="header-container">
            <img src={potrait} className="potrait" width="317" height="317"/>
            <div className="intro-text">
                <h1>Sai Sreeharsha Bolloju</h1>
                <a className="web-dev">Web Developer</a>
                <a className="website">sreeharsha.website</a>
            </div>
            <div className="header-buttons">
                <a href="mailto:sreeh190206@gmail.com" target="_blank">
                    <button className="email-button">
                        <img src={mailIcon} className="email-icon"/>
                        <a className="button-text">Email</a>
                    </button>
                </a>
                <a href="https://www.linkedin.com/in/bolloju-sai-sreeharsha-a3146a294/" target="_blank">
                    <button className="linkedin-button">
                        <img src={linkedinIcon} className="linkedin-icon"/>
                        <a className="button-text">Linkedin</a>
                    </button>   
                </a>
            </div>
        </div>  
    )
}