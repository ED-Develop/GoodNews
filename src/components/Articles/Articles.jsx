import React from 'react';
import {Col, Row} from "react-bootstrap";
import ArticlesList from "./ArticlesList/ArticlesList";
import Aside from "./Aside/Aside";

const Articles = ({articles}) => {
    return (
        <div>
            <Row>
                <Col sm={4}>
                    <Aside articles={articles}/>
                </Col>
                <Col sm={8}>
                    <ArticlesList articles={articles}/>
                </Col>
            </Row>
        </div>
    )
};

export default Articles;