import React from 'react';
import style from './Home.module.css';
import {Col, Container, Row} from "react-bootstrap";
import Slider from "./Carousel/Carousel";

const Home = ({carouselData}) => {
    return (
        <div className={style.home}>
            <Container>
                <section>
                    <Row>
                        <Col sm={8}>
                            <Slider carouselData={carouselData}/>
                        </Col>
                        <Col sm={4}>
                            Aside
                        </Col>
                    </Row>
                </section>
            </Container>
        </div>
    )
};

export default Home;