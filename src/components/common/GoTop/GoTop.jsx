import React from 'react';
import style from './GoTop.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronUp} from "@fortawesome/free-solid-svg-icons";

const GoTop = ({scrollTop}) => {
    const onGoTop = () => {
        scrollTop();
    };

    return (
        <div className={style.goTop} onClick={onGoTop}>
            <FontAwesomeIcon icon={faChevronUp}/>
        </div>
    )
};

export default GoTop;