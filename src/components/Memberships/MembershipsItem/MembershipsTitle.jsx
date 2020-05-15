import React from "react";
import style from "../Memberships.module.css";
import {FormattedMessage, injectIntl} from "react-intl";

const MembershipsTitle = ({currentMembership, intl}) => {
    return (
        <div>
            {
                currentMembership && currentMembership.id !== null
                    ? <>
                        <h2 className={style.membershipsTitle}>
                            <FormattedMessage
                                id='memberships.titleActive'
                                values={{name: intl.formatMessage({id: currentMembership.name})}}
                            />
                        </h2>
                        <p className={style.membershipsTrial}>
                            <FormattedMessage id='memberships.description'/>
                        </p>
                    </>
                    : <>
                        <h2 className={style.membershipsTitle}><FormattedMessage id='memberships.titleFree'/></h2>
                        <p className={style.membershipsTrial}>
                            <FormattedMessage id='memberships.descriptionFree'/>
                        </p>
                    </>
            }
        </div>
    )
};

export default injectIntl(MembershipsTitle);
