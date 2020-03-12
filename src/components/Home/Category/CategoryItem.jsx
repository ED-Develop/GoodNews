import React from "react";
import style from './Category.module.css';
import {Col, Row} from "react-bootstrap";
import {articleDateFormatter} from "../../../helpers/dateFormater";

const CategoryItem = ({article}) => {
    return (
        <div className={style.categoryItem}>
            <Row>
                <Col sm={4} className={style.categoryItemImage}>
                    <img src={article.urlToImage} alt="article"/>
                </Col>
                <Col sm={8} className={style.categoryItemDescr}>
                    <h4><a href={article.url}>{article.title}</a></h4>
                    <p className={style.categoryItemDate}>{articleDateFormatter(article.publishedAt)}</p>
                </Col>
            </Row>
        </div>
    )
};

export default CategoryItem;