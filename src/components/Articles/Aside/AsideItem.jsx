import React from 'react';
import style from './Aside.module.css';

const AsideItem = ({title, link}) => {
    return (
        <div className={style.title}>
            <a href={link}>{title}</a>
        </div>
    )
};

export default AsideItem;