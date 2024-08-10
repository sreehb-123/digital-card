import React from "react";
import twitterIcon from "../images/Twitter Icon.png"
import instaIcon from "../images/Instagram Icon.png"
import githubIcon from "../images/GitHub Icon.png"

export default function Contacts() {
    return(
        <div className="contacts-container">
            <nav>
                <a href="https://x.com/achiever1926" target="_blank" rel="noopener noreferrer">
                    <img src={twitterIcon} alt=""/>
                </a>                
                <a href="https://www.instagram.com/sreehb_123/" target="_blank" rel="noopener noreferrer">
                    <img src={instaIcon} alt=""/>
                </a>
                <a href="https://github.com/sreehb-123/" target="_blank" rel="noopener noreferrer">
                    <img src={githubIcon} alt=""/>
                </a>
            </nav>
        </div>
    )
}