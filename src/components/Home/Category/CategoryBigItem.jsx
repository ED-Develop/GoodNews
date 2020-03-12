import React from "react";
import style from './Category.module.css';

const CategoryBigItem = ({article}) => {
    return (
        <div className={style.categoryBigItem}>
            <div>
                <img src={article.urlToImage} alt="article"/>
            </div>
            <h3><a href={article.url}>{article.title}</a></h3>
            <p>{article.description}</p>
            {article.source.name && <p className={style.author}>By <span>{article.source.name}</span></p>}
        </div>
    )
};

export default CategoryBigItem;