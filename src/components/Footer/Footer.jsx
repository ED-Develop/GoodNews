import React from "react";
import style from './Footer.module.css';
import {Container, Row} from "react-bootstrap";
import Social from "../Home/Social/Social";

const Footer = ({isFixed}) => {
    return (
        <footer className={`${style.footer} ${isFixed && style.footerFixed}`}>
            <Container>
                <Row className={style.footerMain}>
                    <Social className={style.footerSocial} theme='#343434' color='#949494'/>
                </Row>
            </Container>
            <div className={style.footerBottom}>
                <Container>
                    <Row>
                        <p>
                            © 2020 Good News, Inc.
                        </p>
                    </Row>
                </Container>
            </div>
        </footer>
    )
};

export default Footer;
