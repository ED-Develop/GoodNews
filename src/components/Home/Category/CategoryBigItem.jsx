import React from "react";
import style from './Category.module.css';
import defaultImage from '../../../assets/image/newsDefault.jpg';
import {FormattedMessage} from "react-intl";

const CategoryBigItem = ({article}) => {
    return (
        <div className={style.categoryBigItem}>
            <div>
                <img src={article.urlToImage || defaultImage} alt="article"/>
            </div>
            <h3><a href={article.url}>{article.title}</a></h3>
            <p>{article.description}</p>
            {
                article.source.name && <p className={style.author}>
                    <FormattedMessage id='articles.by'/>
                    <span className='ml-2'>{article.source.name}</span>
                </p>
            }
        </div>
    )
};

export default CategoryBigItem;
