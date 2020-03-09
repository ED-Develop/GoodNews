import React from 'react';
import style from './Header.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSortDown} from "@fortawesome/free-solid-svg-icons";
import withHoverEffect from "../../hoc/withHoverEffect";
import FollowTooltip from "./FollowTooltip";
import UserTooltip from "./UserTooltip";

const UserInfo = ({userName}) => {
    return (
        <div className={style.userInfoTriger}>
            Welcome <span> {userName} <FontAwesomeIcon icon={faSortDown}/></span>
        </div>
    )
};

export default withHoverEffect(UserTooltip)(UserInfo);