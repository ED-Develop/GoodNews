import React from "react";
import style from './Memberships.module.css';
import MembershipsItem from "./MembershipsItem/MembershipsItem";
import {Row} from "react-bootstrap";
import MembershipsTitle from "./MembershipsItem/MembershipsTitle";

const Memberships = ({memberships, toggleMembership, currentMembership}) => {
    return (
        <div className={style.memberships}>
            <MembershipsTitle currentMembership={currentMembership}/>
            <Row>
                {
                    memberships.map(membership => <MembershipsItem
                        key={membership.id}
                        membership={membership}
                        toggleMembership={toggleMembership}
                        isActive={currentMembership && membership.id === currentMembership.id}
                    />)
                }
            </Row>
        </div>
    )
};

export default Memberships;
