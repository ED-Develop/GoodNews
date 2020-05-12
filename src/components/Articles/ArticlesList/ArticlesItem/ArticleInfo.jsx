import React from "react";
import style from "../ArticleList.module.css";
import {FormattedDate, FormattedMessage} from "react-intl";

const ArticleInfo = ({author, publishedAt}) => {
    return (
        <div className={style.info}>
            {
                author && <>
                    <FormattedMessage id='articles.by'/>
                    <span className='ml-2'>{author} </span>
                </>
            }
            <FormattedMessage id='articles.published'/>:
            <FormattedDate
                value={publishedAt}
                day="2-digit"
                month="short"
                year="numeric"
                hour='2-digit'
                minute='2-digit'
            />
        </div>
    )
};

export default ArticleInfo;
