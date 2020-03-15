import React, {useState} from "react";
import style from './Social.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookF} from "@fortawesome/free-brands-svg-icons"
import {faTwitter} from "@fortawesome/free-brands-svg-icons"
import {faGooglePlusG} from "@fortawesome/free-brands-svg-icons"
import {faYoutube} from "@fortawesome/free-brands-svg-icons"
import {faLinkedinIn} from "@fortawesome/free-brands-svg-icons"

const Social = () => {
    const [socialLinks] = useState([
        {link: 'https://www.facebook.com/', icon: faFacebookF, background: '#3c5a9b'},
        {link: 'https://twitter.com/', icon: faTwitter, background: '#1fc1f1'},
        {link: 'google.com', icon: faGooglePlusG, background: '#df4932'},
        {link: 'youtube.com', icon: faYoutube, background: '#cf1312'},
        {link: 'https://www.linkedin.com/', icon: faLinkedinIn, background: '#007bb9'}]);

    return (
        <div className={style.social}>
            <h4>Follow Us</h4>
            <div>
                {socialLinks.map(s => <a style={{backgroundColor: s.background}} key={s.link} href={s.link}>
                    <FontAwesomeIcon icon={s.icon}/></a>)}
            </div>
        </div>
    )
};

export default Social;