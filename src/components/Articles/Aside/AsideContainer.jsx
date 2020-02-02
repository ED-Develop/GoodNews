import React from 'react';
import Aside from "./Aside";

const AsideContainer = ({articles}) => {
    return (
        <div>
            <Aside articles={articles}/>
        </div>
    )
};

export default AsideContainer;