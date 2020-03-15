import React, {useState} from "react";
import style from './Tabs.module.css';
import {Tab, Tabs} from "react-bootstrap";
import ArticleItem from "../ArticleItem/ArticleItem";
import {NavLink} from "react-router-dom";

const AsideTabs = ({articles}) => {
    const [key, setKey] = useState('popular');
    const [tags] = useState(['business', 'good news', 'startups', 'politics', 'europe',]);

    const onSelect = (key) => {
        setKey(key)
    };

    return (
        <Tabs defaultActiveKey="profile" activeKey={key} onSelect={onSelect} id="controlled-tab-example">
            <Tab eventKey="popular" title="Popular" className={style.tab}>
                {articles.map( a => {
                    return <ArticleItem key={a.source.id} article={a}/>
                })}
            </Tab>
            <Tab eventKey="tags" title="Tags" className={`${style.tab} ${style.tags}`}>
                {tags.map( t => <NavLink key={t} to={`/articles/${t}`}>{t}</NavLink>)}
            </Tab>
        </Tabs>
    )
};

export default AsideTabs;