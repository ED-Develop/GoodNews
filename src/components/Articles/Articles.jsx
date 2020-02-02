import React from 'react';
import {Col, Row} from "react-bootstrap";
import ArticlesList from "./ArticlesList/ArticlesList";
import AsideContainer from "./Aside/AsideContainer";

const Articles = ({articles}) => {
    return (
        <div>
            <Row>
                <Col sm={4}>
                    <AsideContainer articles={articles}/>
                </Col>
                <Col sm={8}>
                    <ArticlesList articles={articles}/>
                </Col>
            </Row>
        </div>
    )
};

export default Articles;