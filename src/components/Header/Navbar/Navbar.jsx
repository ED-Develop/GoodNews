import React, {useState} from 'react';
import style from './Navbar.module.css';
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {NavLink} from "react-router-dom";

const Navbar = ({toggleIsShowNavbar}) => {
    const [menuItems] = useState({
        'Technology': '/articles/technology',
        'Politics': '/articles/politics',
        'Sport': '/articles/sport'
    });

    const onCloseNavbar = () => {
        toggleIsShowNavbar(false);
    };

    const onSelectMenuItem = () => {
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
                    {Object.entries(menuItems).map(i => {
                        return (
                            <li key={i[0]}>
                                <NavLink onClick={onSelectMenuItem} to={i[1]}>{i[0]}</NavLink>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </nav>
    )
};

export default Navbar;