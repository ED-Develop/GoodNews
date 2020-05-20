import React from "react";
import style from "../Memberships.module.css";
import {Button, Card, Col} from "react-bootstrap";
import MembershipProfit from "./MembershipProfit";
import {FormattedMessage} from "react-intl";

const MembershipsItem = ({membership, toggleMembership, isActive}) => {
    const {name, price, profits, id} = membership;
    const chosePlan = () => toggleMembership({name, id}, true);
    const deactivatePlan = () => toggleMembership({name, id}, false);

    return (
        <Col md={4}>
            <Card className={isActive ? `${style.membership} ${style.active}` : style.membership}>
                <Card.Header>
                    <h4 className={style.membershipName}><FormattedMessage id={name}/></h4>
                    <p className={style.membershipPrice}><FormattedMessage id={price}/></p>
                </Card.Header>
                <Card.Body>
                    <MembershipProfit profits={profits}/>
                    {
                        isActive
                            ? <Button
                                onClick={deactivatePlan}
                                className={style.membershipBtn}
                                variant="danger"
                            >
                                <FormattedMessage id='memberships.deactivateBtn'/>

                            </Button>
                            : <Button
                                onClick={chosePlan}
                                className={style.membershipBtn}
                                variant="danger"
                            >
                                <FormattedMessage id='memberships.choiceBtn'/>
                            </Button>
                    }
                </Card.Body>
            </Card>
        </Col>
    )
};

export default MembershipsItem;
