import React from 'react';
import style from '../Header.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSortDown} from "@fortawesome/free-solid-svg-icons";
import withHoverEffect from "../../../hoc/withHoverEffect";
import UserTooltip from "./UserTooltip";
import {FormattedMessage} from "react-intl";

const UserInfoDesktop = ({userName}) => {
    return (
        <div className={style.userInfoTriger}>
            <FormattedMessage
                id='header.welcome'
            />
            <span> {userName} <FontAwesomeIcon icon={faSortDown}/></span>
        </div>
    )
};

export default withHoverEffect(UserTooltip)(UserInfoDesktop);
