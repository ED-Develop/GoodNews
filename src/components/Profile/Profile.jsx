import React from "react";
import style from './Profile.module.css';
import {Col, Row} from "react-bootstrap";
import profileImage from '../../assets/image/user.jpg';
import UserInfoItem from "./UserInfo/UserInfoItem";
import {startUpperCase} from "../../helpers/stringFormater";
import InputField from "./UserInfo/InputField";
import DoBField from "./UserInfo/DoBField";
import RegionField from "./UserInfo/RegioonField";

const Profile = ({user, region, confirmChanges, changeReduxForm, startSubmit}) => {
    const {login, email, dateOfBirth, membership} = user;

    const profileData = [
        {property: 'Login', value: startUpperCase(login), EditComponent: InputField},
        {property: 'Email', value: email, EditComponent: InputField},
        {property: 'Date of Birth', value: dateOfBirth, EditComponent: DoBField},
        {property: 'Membership', value: membership, EditComponent: '/membership'},
        {property: 'Region', value: region, EditComponent: RegionField}
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

export default Profile;
