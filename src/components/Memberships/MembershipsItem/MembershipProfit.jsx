import React from "react";
import style from "../Memberships.module.css";
import {FormattedMessage} from "react-intl";

const MembershipProfit = ({profits}) => {
    return (
        <ul className={style.membershipProfit}>
            {
                profits.map(({quantity, title}) => {
                    return <li key={title}>
                        <span className={`${style.textBlack} mr-2`}>
                            {
                                typeof quantity === 'number'
                                    ? quantity
                                    : <FormattedMessage id={quantity}/>
                            }
                        </span>
                        <FormattedMessage id={title}/>
                    </li>;
                })
            }
        </ul>
    )
};

export default MembershipProfit;
