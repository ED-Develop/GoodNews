import React, {useState} from 'react';
import style from '../Header.module.css';
import {faFacebookF, faGooglePlusG, faLinkedinIn, faPinterest, faTwitter} from "@fortawesome/free-brands-svg-icons";
import FollowLink from "./FollowLink";


const FollowTooltip = () => {
    const [social] = useState([
        {title: 'Facebook', href: 'https://www.facebook.com/', icon: faFacebookF, color: '#00007d'},
        {title: 'Twitter', href: 'https://twitter.com/', icon: faTwitter, color: '#1fc1f1'},
        {title: 'Google', href: 'https://www.google.com/', icon: faGooglePlusG, color: '#dd4b39'},
        {title: 'Linkedin', href: 'https://www.linkedin.com/', icon: faLinkedinIn, color: '#0077b5'},
        {title: 'Pinterest', href: 'https://www.pinterest.com/', icon: faPinterest, color: '#bd081c'}
    ]);

    return (
        <ul className={style.followTooltip}>
            {social.map(item => <FollowLink link={item} key={item.title}/>)}
        </ul>
    )
};

export default FollowTooltip;
