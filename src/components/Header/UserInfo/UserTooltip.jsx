import React, {useState} from 'react';
import style from '../Header.module.css';
import {FormattedMessage} from "react-intl";
import renderMenuItems from "../../common/Navbar/renderMenuItems";
import Large from "../../common/MediaQuery/Large";
import UserTooltipHeader from "./UserTooltipHeader";

const UserTooltip = ({logout, userName, handleLinkClick}) => {
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
            <Large>
                <UserTooltipHeader userName={userName}/>
            </Large>
            <ul className={style.userNav}>
                {renderMenuItems(menuItems, handleLinkClick)}
            </ul>
            <div className={style.logoutBtn}>
                <button onClick={onLogout}><FormattedMessage id='header.logout'/></button>
            </div>
        </div>
    )
};

export default UserTooltip;
