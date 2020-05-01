import {NavLink} from "react-router-dom";
import {FormattedMessage} from "react-intl";
import React from "react";

const renderMenuItems = (menuItems, handleClick) => {
    return Object.entries(menuItems).map(i => {
        return (
            <li key={i[0]}>
                {
                    handleClick
                        ? <NavLink onClick={handleClick} to={i[1]}>
                            <FormattedMessage id={i[0]}/>
                        </NavLink>
                        : <NavLink to={i[1]}>
                            <FormattedMessage id={i[0]}/>
                        </NavLink>
                }

            </li>
        )
    })
};

export default renderMenuItems;
