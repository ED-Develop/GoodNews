import React, {useRef, useState} from 'react';
import style from './Navbar.module.css';
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import useOutsideClick from "../../../hook/useOutsideClick";
import {FormattedMessage} from "react-intl";
import renderMenuItems from "../../common/Navbar/renderMenuItems";
import Mobile from "../../common/MediaQuery/Mobile";
import UserTooltip from "../UserInfo/UserTooltip";
import {Scrollbars} from "react-custom-scrollbars";
import UserTooltipHeader from "../UserInfo/UserTooltipHeader";
import Search from "../Search/Search";

const Navbar = ({toggleIsShowNavbar, logout, userName, isAuth, onSearch}) => {
    const [menuItems] = useState({
        'navbar.general': '/articles/general',
        'navbar.technology': '/articles/technology',
        'navbar.entertainment': '/articles/entertainment',
        'navbar.sports': '/articles/sports',
        'navbar.business': '/articles/business',
        'navbar.health': '/articles/health',
        'navbar.science': '/articles/science',
    });

    const onCloseNavbar = () => toggleIsShowNavbar(false);

    const navbarRef = useRef();

    const handleSearch = (searchData) => {
        onSearch(searchData);
        onCloseNavbar();
    };

    useOutsideClick(onCloseNavbar, navbarRef);

    return (
        <nav className={style.navbar} ref={navbarRef}>
            <div className={style.close} onClick={onCloseNavbar}>
                <FontAwesomeIcon icon={faTimes}/>
            </div>
            <div>
                <Mobile>
                    {isAuth && <UserTooltipHeader userName={userName}/>}
                    <Search onSubmit={handleSearch} placeholder='header.searchMobile'/>
                </Mobile>
                <div className={style.navbarScroll}>
                    <Scrollbars
                        autoHide
                        autoHideTimeout={1000}
                        autoHideDuration={200}
                    >
                        {isAuth && (
                            <Mobile>
                                <UserTooltip logout={logout} handleLinkClick={onCloseNavbar}/>
                            </Mobile>
                        )}
                        <h4><FormattedMessage id='navbar.category'/></h4>
                        <ul>
                            {renderMenuItems(menuItems, onCloseNavbar)}
                        </ul>
                    </Scrollbars>
                </div>
            </div>
        </nav>
    )
};

export default Navbar;
