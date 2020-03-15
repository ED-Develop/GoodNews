import React from "react";
import style from './ArticleItem.module.css';
import {Col, Row} from "react-bootstrap";
import {articleDateFormatter} from "../../../helpers/dateFormater";
import defaultImage from '../../../assets/image/newsDefault.jpg';

const ArticleItem = ({article}) => {
    return (
        <div className={style.articleItem}>
            <Row>
                <Col sm={4} className={style.articleItemImage}>
                    <img src={article.urlToImage || defaultImage} alt="article"/>
                </Col>
                <Col sm={8} className={style.articleItemDescr}>
                    <h4><a href={article.url}>{article.title}</a></h4>
                    <p className={style.articleItemDate}>{articleDateFormatter(article.publishedAt)}</p>
                </Col>
            </Row>
        </div>
    )
};

export default ArticleItem;