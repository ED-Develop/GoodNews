import React from "react";
import style from './Category.module.css';
import {Col, Row} from "react-bootstrap";

const CategoryItem = ({article}) => {
    return (
        <div className={style.categoryItem}>
            <Row>
                <Col sm={4}>
                    <img src={article.urlToImage} alt="article"/>
                </Col>
                <Col sm={8}>
                    <h3><a href={article.url}>{article.title}</a></h3>
                </Col>
            </Row>
        </div>
    )
};

export default CategoryItem;