import React from 'react';
import style from './Header.module.css';
import user from '../../assets/image/user.jpg';

const UserTooltip = () => {
    return (
        <div className={`${style.userTooltip} ${style.tooltip}`}>
            <div className={style.userHeader}>
                <img src={user} alt="user"/>
                <div>Edward Shvetsov</div>
            </div>
            <ul className={style.userNav}>
                <li><a href="#">My profile</a></li>
                <li><a href="#">My account</a></li>
                <li><a href="#">My saved item</a></li>
            </ul>
            <div><button>Logout</button></div>
        </div>
    )
};

export default UserTooltip;