import React from 'react';
import style from "./Header.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSortDown} from "@fortawesome/free-solid-svg-icons";
import FollowTooltip from "./FollowTooltip";
import withHoverEffect from "../../hoc/withHoverEffect";

const FollowHover = () => {
    return (
        <div className={style.follow}>
            Follow Us
            <span>
                <FontAwesomeIcon icon={faSortDown}/>
            </span>
        </div>
    )
};

export default withHoverEffect(FollowTooltip)(FollowHover);