import React from 'react';
import style from './Header.module.css';
import {Col, Container, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faSearch} from "@fortawesome/free-solid-svg-icons";
import FollowHover from "./FollowHover";
import UserInfo from "./UserInfo/UserInfo";
import Navbar from "./Navbar/Navbar";
import {CSSTransitionGroup} from "react-transition-group";
import {NavLink} from "react-router-dom";
import Search from "./Search/Search";
import Large from "../common/MediaQuery/Large";

const Header = ({isShowNavbar, isAuth, logout, userName, isSearch, ...props}) => {
    const onOpenNavbar = () => props.toggleIsShowNavbar(true);

    const onOpenLoginForm = () => props.openLoginForm(true);

    const onSearch = ({search}) => {
        props.searchArticles(search);
        props.toggleIsSearch();
    };

    return (
        <header className={style.header}>
            <CSSTransitionGroup transitionName="navbar" transitionEnterTimeout={300} transitionLeaveTimeout={300}>
                {isShowNavbar && <Navbar
                    toggleIsShowNavbar={props.toggleIsShowNavbar}
                    userName={userName}
                    logout={logout}
                    isAuth={isAuth}
                    onSearch={onSearch}
                />}
            </CSSTransitionGroup>
            <Container>
                <Row>
                    <Col xs={8} md={6}>
                        <div className={`d-flex align-items-center ${style.logo}`}>
                            <div className={style.btnBurger} onClick={onOpenNavbar}>
                                <FontAwesomeIcon icon={faBars}/>
                            </div>
                            <Large>
                                <div className={style.search}>
                                    <FontAwesomeIcon onClick={props.toggleIsSearch} icon={faSearch}/>
                                    <CSSTransitionGroup
                                        transitionName="fade"
                                        transitionEnterTimeout={300}
                                        transitionLeaveTimeout={300}
                                    >
                                        {isSearch && <Search onToggleSearch={props.toggleIsSearch} onSubmit={onSearch}/>}
                                    </CSSTransitionGroup>
                                </div>
                            </Large>
                            <h1><NavLink to='/'>Good News</NavLink></h1>
                            <Large>
                                <FollowHover/>
                            </Large>
                        </div>
                    </Col>
                    <Col xs={4} md={6}>
                        <UserInfo
                            isAuth={isAuth}
                            logout={logout}
                            onOpenLoginForm={onOpenLoginForm}
                            userName={userName}
                        />
                    </Col>
                </Row>
            </Container>
        </header>
    )
};

export default Header;
