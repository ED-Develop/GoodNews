import React, {useEffect, useState} from 'react';
import style from '../Home.module.css';
import {Carousel} from "react-bootstrap";
import {CSSTransitionGroup} from "react-transition-group";

const Slider = ({carouselData}) => {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(null);
    const [isShowDescription, setIsShowDescription] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsShowDescription(true);
        }, 700)
    }, [isShowDescription]);

    const onSlide = (selectedIndex, e) => {
        if (!isShowDescription) return;

        setIsShowDescription(false);
        setIndex(selectedIndex);
        setDirection(e.direction);
    };

    return (
        <>
            <Carousel fade={true} activeIndex={index} direction={direction} className={style.slider} onSelect={onSlide}>
                {carouselData.map(i => {
                    return (
                        <Carousel.Item key={i.id} className={style.sliderItem}>
                            <img className='w-100 h-100' src={i.image} alt="image"/>
                            <CSSTransitionGroup transitionName="slider" transitionEnterTimeout={300}
                                                transitionLeaveTimeout={300}>
                                {isShowDescription && <Carousel.Caption className={style.sliderDescription}>
                                    <p>{i.title}</p>
                                </Carousel.Caption>}
                            </CSSTransitionGroup>
                        </Carousel.Item>
                    )
                })}
            </Carousel>
        </>
    )
};

export default Slider;