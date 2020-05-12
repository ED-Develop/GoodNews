import React from "react";
import style from "../ArticleList.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";

const ArticleLink = ({url}) => {
    return (
        <div className={style.link}>
            <a href={url} className='btn'>
                Learn more
                <span>
                    <FontAwesomeIcon icon={faArrowRight}/>
                </span>
            </a>
        </div>
    )
};

export default ArticleLink;
