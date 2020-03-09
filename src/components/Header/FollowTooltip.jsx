import React, {useState} from 'react';
import style from './Header.module.css';
import facebook from '../../assets/image/facebook.svg';
import twitter from '../../assets/image/twitter.svg';
import google from '../../assets/image/google.svg';
import linkedin from '../../assets/image/linkedIn.svg';
import pinterest from '../../assets/image/pinterest.svg';


const FollowTooltip = () => {
    let [social] = useState(['Facebook', 'Twitter', 'Google', 'Linkedin', 'Pinterest']);
    let [icon] = useState({facebook, twitter, google, linkedin, pinterest});

    return (
        <ul className={style.followTooltip}>
            {social.map(i => {
                return (
                    <li key={i}>
                        <a href="#"> <img src={icon[i.toLowerCase()]} alt={i}/>Follow us on {i}</a>
                    </li>
                )
            })}
        </ul>
    )
};

export default FollowTooltip;