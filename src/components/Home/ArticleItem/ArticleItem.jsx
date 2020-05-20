import React from "react";
import style from './ArticleItem.module.css';
import {Col, Row} from "react-bootstrap";
import {FormattedDate} from "react-intl";
import ImgWithDefault from "../../common/Utils/ImgWithDefault";
import {maxLengthString} from "../../../helpers/utils";

const ArticleItem = ({article}) => {
    return (
        <div className={style.articleItem}>
            <Row>
                <Col sm={4} className={style.articleItemImage}>
                    <ImgWithDefault url={article.urlToImage} alt="article"/>
                </Col>
                <Col sm={8} className={style.articleItemDescr}>
                    <h4><a href={article.url}>{maxLengthString(article.title, 70)}</a></h4>
                    <p className={style.articleItemDate}>
                        <FormattedDate
                            value={article.publishedAt}
                            day="2-digit"
                            month="short"
                            year="numeric"
                            hour='2-digit'
                            minute='2-digit'
                        />
                    </p>
                </Col>
            </Row>
        </div>
    )
};

export default ArticleItem;
