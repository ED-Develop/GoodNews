import React from "react";
import style from "../ArticleList.module.css";

const ArticleHeading = ({title, description}) => {
    return (
        <div className={style.articleHeading}>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    )
};

export default ArticleHeading;
