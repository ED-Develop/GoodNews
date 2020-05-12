import React from "react";
import style from './Category.module.css';
import {Col, Row} from "react-bootstrap";
import CategoryBigItem from "./CategoryBigItem";
import {NavLink} from "react-router-dom";
import ArticleItem from "../ArticleItem/ArticleItem";
import {FormattedMessage} from "react-intl";

const Category = ({category}) => {
    return (
        <div className={style.categoryContainer}>
            <h2><NavLink to={`/articles/${category.category}`}><FormattedMessage id={category.title}/></NavLink></h2>
            <Row>
                <Col className='pr-1'>
                    <CategoryBigItem article={category.data[0]}/>
                </Col>
                <Col>
                    {category.data.map( (a, index) => {
                        if (index === 0) return false;

                        return <ArticleItem key={a.source.id} article={a}/>
                    })}
                </Col>
            </Row>
        </div>
    )
};

export default Category;
