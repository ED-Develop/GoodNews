import React, {useEffect, useState} from 'react';
import style from './Home.module.css';
import {Col, Row} from "react-bootstrap";
import Slider from "./Carousel/Carousel";
import Subscribe from "./Subscribe/Subscribe";
import Category from "./Category/Category";
import AsideTabs from "./Tabs/Tabs";
import Social from "./Social/Social";
import Mobile from "../common/MediaQuery/Mobile";
import Desktop from "../common/MediaQuery/Desktop";

const Home = ({carouselData, categories, subscribe, isSubscribe, isAuth, popularArticles}) => {
    const [isSubscribeChange, setIsSubscribeChange] = useState(false);

    useEffect(() => {
        if (isSubscribe && !isAuth) {
            setIsSubscribeChange(true);
        }
    }, [isSubscribe, isAuth]);

    const subscribeElement = (
        <>
            {!isSubscribe && !isAuth && <Subscribe isSubscribeChange={isSubscribeChange} subscribe={subscribe}/>}
            {isSubscribeChange && !isAuth  && <Subscribe isSubscribeChange={isSubscribeChange} subscribe={subscribe}/>}
        </>
    );

    return (
        <div className={style.home}>
            <section>
                <Row>
                    <Col lg={8}>
                        <Slider carouselData={carouselData}/>
                        <Mobile>{subscribeElement}</Mobile>
                        {categories.map(c => <Category key={c.category} category={c}/>)}
                    </Col>
                    <Desktop>
                        <Col lg={4}>
                            {subscribeElement}
                            <AsideTabs articles={popularArticles}/>
                            <Social/>
                        </Col>
                    </Desktop>
                </Row>
            </section>
        </div>
    )
};

export default Home;
