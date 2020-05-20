import React from 'react';
import style from './Aside.module.css';
import AsideList from "./AsideList";
import {FormattedMessage} from "react-intl";
import { Scrollbars } from 'react-custom-scrollbars';

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
            <Scrollbars
                autoHide
                autoHideTimeout={1000}
                autoHideDuration={200}
            >
                <AsideList articles={articles}/>
            </Scrollbars>
        </aside>
    )
};

export default Aside;
