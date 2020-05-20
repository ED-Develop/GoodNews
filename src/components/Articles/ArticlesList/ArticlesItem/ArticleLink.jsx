import React from "react";
import style from "../ArticleList.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {FormattedMessage} from "react-intl";

const ArticleLink = ({url}) => {
    return (
        <div className={style.link}>
            <a href={url} className='btn'>
                <FormattedMessage id='articles.link'/>
                <span>
                    <FontAwesomeIcon icon={faArrowRight}/>
                </span>
            </a>
        </div>
    )
};

export default ArticleLink;
