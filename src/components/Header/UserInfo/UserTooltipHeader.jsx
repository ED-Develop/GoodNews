import React from "react";
import style from "../Header.module.css";
import user from "../../../assets/image/user.jpg";

const UserTooltipHeader = ({userName}) => {
    return (
        <div className={style.userHeader}>
            <img src={user} alt="user"/>
            <div>{userName}</div>
        </div>
    )
};

export default UserTooltipHeader;
