import React from 'react';
import style from './ArticleList.module.css';
import {faBars, faCommentAlt} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {articleDateFormatter} from "../../../helpers/dateFormater";

const ArticlesItem = ({article}) => {
    return (
        <div className={style.articleItem}>
            <div className={style.articleHeading}>
                <h2><a href={article.url}>{article.title}</a></h2>
                <p>{article.description}</p>
                <div className={style.info}>
                    {article.author && <>By <span>{article.author} </span></>}
                    Published: {articleDateFormatter(article.publishedAt)}
                </div>
            </div>
            <div className={style.picture}>
                <img className='w-100' src={article.urlToImage} alt="photo"/>
            </div>
            <p>{article.content}</p>
            <div className={style.comment}>
                <button className='btn'>
                    <span><FontAwesomeIcon icon={faCommentAlt}/></span>
                    Load Comments (35)
                </button>
            </div>
        </div>
    )
};

export default ArticlesItem;