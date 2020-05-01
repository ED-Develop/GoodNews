import React, {useRef, useState} from 'react';
import style from './Navbar.module.css';
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import useOutsideClick from "../../../hook/useOutsideClick";
import {FormattedMessage} from "react-intl";
import renderMenuItems from "../../common/Navbar/renderMenuItems";

const Navbar = ({toggleIsShowNavbar}) => {
    const [menuItems] = useState({
        'navbar.general': '/articles/general',
        'navbar.technology': '/articles/technology',
        'navbar.entertainment': '/articles/entertainment',
        'navbar.sports': '/articles/sports',
        'navbar.business': '/articles/business',
        'navbar.health': '/articles/health',
        'navbar.science': '/articles/science',
    });

    const onCloseNavbar = () => {
        toggleIsShowNavbar(false);
    };

    const onSelectMenuItem = () => {
        toggleIsShowNavbar(false);
    };

    const navbarRef = useRef();

    useOutsideClick(onCloseNavbar, navbarRef);

    return (
        <nav className={style.navbar} ref={navbarRef}>
            <div className={style.close} onClick={onCloseNavbar}>
                <FontAwesomeIcon icon={faTimes}/>
            </div>
            <div>
                <h4><FormattedMessage id='navbar.category'/></h4>
                <ul>
                    {renderMenuItems(menuItems, onSelectMenuItem)}
                </ul>
            </div>
        </nav>
    )
};

export default Navbar;
