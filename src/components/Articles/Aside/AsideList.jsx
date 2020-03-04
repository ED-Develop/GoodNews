import React from 'react';
import AsideItem from "./AsideItem";

const AsideList = ({articles}) => {
    return (
        <div>
            {articles.map( a => {
                return <AsideItem key={a.id} link={a.url} title={a.title}/>
            })}
        </div>
    )
};

export default AsideList;