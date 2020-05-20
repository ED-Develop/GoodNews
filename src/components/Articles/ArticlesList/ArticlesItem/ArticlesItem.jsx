import React from 'react';
import style from '../ArticleList.module.css';
import ArticleHeading from "./ArticleHeading";
import ArticleInfo from "./ArticleInfo";
import ArticlePicture from "./ArticlePicture";
import ArticleLink from "./ArticleLink";

const ArticlesItem = ({article}) => {
    return (
        <div className={style.articleItem}>
            <ArticleHeading title={article.title} url={article.url} description={article.description}/>
            <ArticlePicture urlToImage={article.urlToImage}/>
            <ArticleInfo author={article.author} publishedAt={article.publishedAt}/>
            <ArticleLink url={article.url}/>
        </div>
    )
};

export default ArticlesItem;
