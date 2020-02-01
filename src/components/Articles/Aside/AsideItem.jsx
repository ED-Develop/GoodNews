import React from 'react';

const AsideItem = ({title, link}) => {
    return (
        <div>
            <a href={link}>{title}</a>
        </div>
    )
};

export default AsideItem;