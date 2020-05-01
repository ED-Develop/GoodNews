import React, {useState} from 'react';
import style from './Header.module.css';
import user from '../../assets/image/user.jpg';
import {FormattedMessage} from "react-intl";
import renderMenuItems from "../common/Navbar/renderMenuItems";

const UserTooltip = ({logout, userName}) => {
    const [menuItems] = useState({
        'header.profile': '/profile',
        'header.membership': '/membership',
        'header.saved': '/saved'
    });

    const onLogout = () => {
        logout();
    };

    return (
        <div className={`${style.userTooltip} ${style.tooltip}`}>
            <div className={style.userHeader}>
                <img src={user} alt="user"/>
                <div>{userName}</div>
            </div>
            <ul className={style.userNav}>
                {renderMenuItems(menuItems)}
            </ul>
            <div>
                <button onClick={onLogout}><FormattedMessage id='header.logout'/></button>
            </div>
        </div>
    )
};

export default UserTooltip;
