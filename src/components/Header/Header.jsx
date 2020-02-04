import React from 'react';
import style from './Header.module.css';
import {Col, Container, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faSearch, faSortDown} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    return (
        <header className={style.header}>
            <Container>
                <Row>
                    <Col sm={6}>
                        <div className={`d-flex align-items-center ${style.logo}`}>
                            <div className={style.btnBurger}>
                                <FontAwesomeIcon icon={faBars}/>
                            </div>
                            <div className={style.search}>
                                <FontAwesomeIcon icon={faSearch}/>
                            </div>
                            <h1>Good News</h1>
                            <div className={style.follow}>
                                Follow Us
                                <span>
                                    <FontAwesomeIcon icon={faSortDown}/>
                                </span>
                            </div>
                        </div>
                    </Col>
                    <Col sm={6}>
                        <div className={`d-flex justify-content-end align-items-center h-100 ${style.login}`}>
                            Welcome <span> Edward <FontAwesomeIcon icon={faSortDown}/></span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </header>
    )
};

export default Header;