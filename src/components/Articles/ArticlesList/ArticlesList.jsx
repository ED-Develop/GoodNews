import React from 'react';
import ArticlesItem from "./ArticlesItem/ArticlesItem";

const ArticlesList = ({articles}) => {
    return (
        <div>
            {articles.map( a => {
                return <ArticlesItem article={a} key={a.source.id}/>
            })}
        </div>
    )
};

export default ArticlesList;
