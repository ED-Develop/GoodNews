import React from 'react';
import {Col, Row} from "react-bootstrap";
import ArticlesList from "./ArticlesList/ArticlesList";
import AsideContainer from "./Aside/AsideContainer";
import Large from "../common/MediaQuery/Large";

const Articles = ({articles}) => {
    return (
        <div>
            <Row className='flex-column'>
                <Large>
                    <Col md={4}>
                        <AsideContainer/>
                    </Col>
                </Large>
                <Col md={8} className='align-self-end'>
                    <ArticlesList articles={articles}/>
                </Col>
            </Row>
        </div>
    )
};

export default Articles;
