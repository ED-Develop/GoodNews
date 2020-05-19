import React from "react";
import style from "../Header.module.css";
import Large from "../../common/MediaQuery/Large";
import Mobile from "../../common/MediaQuery/Mobile";
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";
import {FormattedMessage} from "react-intl";
import UserInfoDesktop from "./UserInfoDesktop";

const UserInfo = ({isAuth, userName, logout, onOpenLoginForm}) => {
    return (
        <div className={`d-flex justify-content-end align-items-center h-100 ${style.login}`}>
            {isAuth
                ? (
                    <>
                        <Large>
                            <UserInfoDesktop userName={userName} logout={logout}/>
                        </Large>
                        <Mobile>
                            <NavLink to='/profile' className={style.mobileUserLink}>
                                <FontAwesomeIcon icon={faUser} color='#fff' size='sm'/>
                            </NavLink>
                        </Mobile>
                    </>
                )
                : <button onClick={onOpenLoginForm}><FormattedMessage id='header.login'/></button>}
        </div>
    )
};

export default UserInfo;
