import React, {useState} from "react";
import style from './Tabs.module.css';
import {Tab, Tabs} from "react-bootstrap";
import ArticleItem from "../ArticleItem/ArticleItem";
import {NavLink} from "react-router-dom";
import {injectIntl} from "react-intl";

const AsideTabs = ({articles, intl}) => {
    const [key, setKey] = useState('popular');
    const [tags] = useState(['tabs.business', 'tabs.sports', 'tabs.technology', 'tabs.apple', 'tabs.samsung']);

    const onSelect = (key) => {
        setKey(key)
    };

    return (
        <Tabs defaultActiveKey="profile" activeKey={key} onSelect={onSelect} id="controlled-tab-example">
            <Tab eventKey="popular" title={intl.formatMessage({id: 'tabs.popular'})} className={style.tab}>
                {
                    articles.map(a => {
                        return <ArticleItem key={a.source.id} article={a}/>
                    })
                }
            </Tab>
            <Tab eventKey="tags" title={intl.formatMessage({id: 'tabs.tags'})} className={`${style.tab} ${style.tags}`}>
                {
                    tags.map(t => {
                        const title = intl.formatMessage({id: t});

                        return <NavLink key={title} to={`/articles?search=${title}`}>{title}</NavLink>
                    })
                }
            </Tab>
        </Tabs>
    )
};

export default injectIntl(AsideTabs);
