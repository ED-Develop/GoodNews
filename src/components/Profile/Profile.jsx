import React from "react";
import style from './Profile.module.css';
import {Col, Row} from "react-bootstrap";
import profileImage from '../../assets/image/user.jpg';
import UserInfoItem from "./UserInfo/UserInfoItem";
import {startUpperCase} from "../../helpers/stringFormater";
import InputField from "./UserInfo/InputField";
import DoBField from "./UserInfo/DoBField";
import RegionField from "./UserInfo/RegioonField";
import {injectIntl} from "react-intl";

const Profile = ({user, region, confirmChanges, changeReduxForm, startSubmit, intl}) => {
    const {login, email, dateOfBirth, membership} = user;

    const profileData = [
        {title: 'profile.login', property: 'login', value: startUpperCase(login), EditComponent: InputField},
        {title: 'profile.email', property: 'email', value: email, EditComponent: InputField},
        {title: 'profile.dateOfBirth', property: 'dateOfBirth', value: dateOfBirth, EditComponent: DoBField},
        {title: 'profile.membership', property: 'membership', value: membership, EditComponent: '/membership'},
        {title: 'profile.region', property: 'region', value: region, EditComponent: RegionField}
    ];

    return (
        <div className={style.profileWrapper}>
            <div className={style.profileContainer}>
                <Row>
                    <Col md={4} className={style.profileImage}>
                        <img src={profileImage} alt="image"/>
                    </Col>
                    <Col md={8} className={style.userInfo}>
                        {profileData.map((item, index) => {
                            return <UserInfoItem
                                property={item.property}
                                isTitle={!index}
                                title={intl.formatMessage({id: item.title})}
                                value={item.value}
                                confirmChanges={confirmChanges}
                                changeReduxForm={changeReduxForm}
                                startSubmit={startSubmit}
                                EditComponent={item.EditComponent}
                            />
                        })}
                    </Col>
                </Row>
            </div>
        </div>
    )
};

export default injectIntl(Profile);
