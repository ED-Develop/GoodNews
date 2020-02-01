import React from 'react';
import style from './Aside.module.css';
import AsideList from "./AsideList";

const Aside = ({articles}) => {
    return (
        <aside className={style.aside}>
            <div className={style.btnGroup}>
                <button className='btn'>POPULAR</button>
                <button className={`btn ${style.active}`}>LATEST</button>
            </div>
            <AsideList articles={articles}/>
        </aside>
    )
};

export default Aside;