import React from 'react';
import style from "../Header.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSortDown} from "@fortawesome/free-solid-svg-icons";
import FollowTooltip from "./FollowTooltip";
import withHoverEffect from "../../../hoc/withHoverEffect";
import {FormattedMessage} from "react-intl";

const FollowHover = () => {
    return (
        <div className={style.follow}>
            <FormattedMessage id='header.follow'/>
            <span>
                <FontAwesomeIcon icon={faSortDown}/>
            </span>
        </div>
    )
};

export default withHoverEffect(FollowTooltip)(FollowHover);
