import React from 'react';
import style from './Header.module.css';
import {Col, Container, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faSearch} from "@fortawesome/free-solid-svg-icons";
import FollowHover from "./FollowHover";
import UserInfo from "./UserInfo";
import Navbar from "./Navbar/Navbar";
import {CSSTransitionGroup} from "react-transition-group";
import {NavLink} from "react-router-dom";
import Search from "./Search/Search";

const Header = ({isShowNavbar, toggleIsShowNavbar, isAuth, openLoginForm, logout, userName, isSearch, toggleIsSearch,
                    searchArticles}) => {
    const onOpenNavbar = () => {
        toggleIsShowNavbar(true);
    };

    const onOpenLoginForm = () => {
        openLoginForm(true);
    };

    const onToggleSearch = () => {
        toggleIsSearch();
    };

    const onSearch = ({search}) => {
        searchArticles(search);
        onToggleSearch();
    };

    return (
        <header className={style.header}>
            <CSSTransitionGroup transitionName="navbar" transitionEnterTimeout={300} transitionLeaveTimeout={300}>
                {isShowNavbar && <Navbar toggleIsShowNavbar={toggleIsShowNavbar}/>}
            </CSSTransitionGroup>
            <Container>
                <Row>
                    <Col sm={6}>
                        <div className={`d-flex align-items-center ${style.logo}`}>
                            <div className={style.btnBurger} onClick={onOpenNavbar}>
                                <FontAwesomeIcon icon={faBars}/>
                            </div>
                            <div className={style.search}>
                                <FontAwesomeIcon onClick={onToggleSearch} icon={faSearch}/>
                                <CSSTransitionGroup transitionName="fade" transitionEnterTimeout={300}
                                                    transitionLeaveTimeout={300}>
                                    {isSearch && <Search onToggleSearch={toggleIsSearch} onSubmit={onSearch}/>}
                                </CSSTransitionGroup>
                            </div>
                            <h1><NavLink to='/'>Good News</NavLink></h1>
                            <FollowHover/>
                        </div>
                    </Col>
                    <Col sm={6}>
                        <div className={`d-flex justify-content-end align-items-center h-100 ${style.login}`}>
                            {isAuth ? <UserInfo userName={userName} logout={logout}/>
                                : <button onClick={onOpenLoginForm}>Login</button>}
                        </div>
                    </Col>
                </Row>
            </Container>
        </header>
    )
};

export default Header;