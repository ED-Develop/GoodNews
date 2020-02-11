import React from 'react';
import style from './Navbar.module.css';
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {NavLink} from "react-router-dom";

const Navbar = ({toggleIsShowNavbar}) => {
    const onCloseNavbar = () => {
        toggleIsShowNavbar(false);
    };

    return (
        <nav className={style.navbar}>
            <div className={style.close} onClick={onCloseNavbar}>
                <FontAwesomeIcon icon={faTimes}/>
            </div>
            <div>
                <h4>Category</h4>
                <ul>
                    <li><NavLink to='/articles/technology'>Technology</NavLink></li>
                    <li><NavLink to='/articles/politics'>Politics</NavLink></li>
                    <li><NavLink to='/articles/sport'>Sport</NavLink></li>
                </ul>
            </div>
        </nav>
    )
};

export default Navbar;