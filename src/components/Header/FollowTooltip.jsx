import React, {useState} from 'react';
import style from './Header.module.css';
import facebook from '../../assets/image/facebook.svg';
import twitter from '../../assets/image/twitter.svg';
import google from '../../assets/image/google.svg';
import linkedin from '../../assets/image/linkedIn.svg';
import pinterest from '../../assets/image/pinterest.svg';
import {FormattedMessage} from "react-intl";


const FollowTooltip = () => {
    let [social] = useState([
        {title: 'Facebook', href: 'https://www.facebook.com/'},
        {title: 'Twitter', href: 'https://twitter.com/'},
        {title: 'Google', href: 'https://www.google.com/'},
        {title: 'Linkedin', href: 'https://www.linkedin.com/'},
        {title: 'Pinterest', href: 'https://www.pinterest.com/'}
    ]);
    let [icon] = useState({facebook, twitter, google, linkedin, pinterest});

    return (
        <ul className={style.followTooltip}>
            {social.map(item => {
                return (
                    <li key={item.title}>
                        <a href={item.href}>
                            <img src={icon[item.title.toLowerCase()]} alt={item.title}/>
                            <FormattedMessage id='header.followTooltip'/> {item.title}
                        </a>
                    </li>
                )
            })}
        </ul>
    )
};

export default FollowTooltip;
