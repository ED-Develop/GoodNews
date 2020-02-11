import React from 'react';
import style from './Navbar.module.css';
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

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
                    <li>Technology</li>
                    <li>Politics</li>
                    <li>Sport</li>
                </ul>
            </div>
        </nav>
    )
};

export default Navbar;