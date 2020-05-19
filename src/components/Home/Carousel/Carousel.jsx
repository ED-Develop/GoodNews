import React, {useEffect, useState} from 'react';
import style from '../Home.module.css';
import {Carousel} from "react-bootstrap";
import {faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import ImgWithDefault from "../../common/Utils/ImgWithDefault";
import {maxLengthString} from "../../../helpers/utils";
import CSSTransition from "react-transition-group/cjs/CSSTransition";

const Slider = ({carouselData}) => {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(null);
    const [isShowDescription, setIsShowDescription] = useState(true);

    useEffect(() => {
        if (!isShowDescription) {
            const timeout = setTimeout(() => {
                setIsShowDescription(true);
            }, 700);

            return () => {
                clearTimeout(timeout);
            };
        }
    }, [isShowDescription]);

    const onSlide = (selectedIndex, e) => {
        if (!isShowDescription) return;

        setIsShowDescription(false);
        setIndex(selectedIndex);
        setDirection(e.direction);
    };

    return (
        <Carousel
            fade={true}
            activeIndex={index}
            direction={direction}
            className={`${style.slider} custom-slider`}
            onSelect={onSlide} indicators={false}
            prevIcon={<FontAwesomeIcon icon={faChevronLeft}/>}
            nextIcon={<FontAwesomeIcon icon={faChevronRight}/>}
        >
            {
                carouselData.map(i => {
                    return (
                        <Carousel.Item key={i.id} className={style.sliderItem}>
                            <ImgWithDefault className='w-100 h-100' url={i.image} alt="carouselImage"/>
                            <CSSTransition
                                in={isShowDescription}
                                classNames="slider"
                                timeout={300}
                                unmountOnExit
                            >
                                <Carousel.Caption className={style.sliderDescription}>
                                    <p>{maxLengthString(i.title, 100)}</p>
                                </Carousel.Caption>
                            </CSSTransition>
                        </Carousel.Item>
                    )
                })
            }
        </Carousel>
    )
};

export default Slider;
