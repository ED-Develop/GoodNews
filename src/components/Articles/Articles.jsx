import React from 'react';
import style from './Aside/Aside.module.css';
import {Col, Row} from "react-bootstrap";
import ArticlesList from "./ArticlesList/ArticlesList";
import AsideContainer from "./Aside/AsideContainer";

const Articles = ({articles}) => {
    return (
        <div>
            <Row className='flex-column'>
                <Col sm={4} className={style.asideContainer}>
                    <AsideContainer/>
                </Col>
                <Col sm={8} className='align-self-end'>
                    <ArticlesList articles={articles}/>
                </Col>
            </Row>
        </div>
    )
};

export default Articles;
