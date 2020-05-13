import React from 'react';
import style from './Aside.module.css';
import AsideList from "./AsideList";
import {FormattedMessage} from "react-intl";

const Aside = ({articles, setActiveButton, asideFilter}) => {
    return (
        <aside className={style.aside}>
            <div className={style.btnGroup}>
                <button
                    onClick={() => setActiveButton('popular')}
                    className={`btn ${asideFilter === 'popular' ? style.active : ''}`}
                >
                    <FormattedMessage id='aside.popular'/>
                </button>
                <button
                    onClick={() => setActiveButton('latest')}
                    className={`btn ${asideFilter === 'latest' ? style.active : ''}`}
                >
                    <FormattedMessage id='aside.latest'/>
                </button>
            </div>
            <AsideList articles={articles}/>
        </aside>
    )
};

export default Aside;
