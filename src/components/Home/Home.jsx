import React, {useEffect, useState} from 'react';
import style from './Home.module.css';
import {Col, Row} from "react-bootstrap";
import Slider from "./Carousel/Carousel";
import Subscribe from "./Subscribe/Subscribe";
import Category from "./Category/Category";
import Archives from "./Archives/Archives";

const Home = ({carouselData, categories, subscribe, isSubscribe, isAuth}) => {
    const [isSubscribeChange, setIsSubscribeChange] = useState(false);

    useEffect(() => {
        if (isSubscribe && !isAuth) {
            setIsSubscribeChange(true);
        }
    }, [isSubscribe]);

    return (
        <div className={style.home}>
            <section>
                <Row>
                    <Col sm={8}>
                        <Slider carouselData={carouselData}/>
                        {categories.map(c => {
                            return <Category key={c.category} category={c}/>
                        })}
                    </Col>
                    <Col sm={4}>
                        {!isSubscribe && !isAuth && <Subscribe isSubscribeChange={isSubscribeChange} subscribe={subscribe}/>}
                        {isSubscribeChange && !isAuth  && <Subscribe isSubscribeChange={isSubscribeChange} subscribe={subscribe}/>}
                        <Archives/>
                    </Col>
                </Row>
            </section>
        </div>
    )
};

export default Home;