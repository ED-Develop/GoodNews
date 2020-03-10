import React from 'react';
import style from '../Home.module.css';
import {Carousel} from "react-bootstrap";

const Slider = ({carouselData}) => {
    return (
        <>
            <Carousel className={style.slider}>
                {carouselData.map(i => {
                    return (
                        <Carousel.Item key={i.id}>
                            <img className='w-100 h-100' src={i.image} alt="image"/>
                            <Carousel.Caption>
                                <p>{i.title}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    )
                })}
            </Carousel>
        </>
    )
};

export default Slider;