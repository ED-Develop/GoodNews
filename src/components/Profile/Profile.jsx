import React from "react";
import style from './Profile.module.css';
import {Col, Row} from "react-bootstrap";
import profileImage from '../../assets/image/user.jpg';
import UserInfoItem from "./UserInfo/UserInfoItem";
import {startUpperCase} from "../../helpers/stringFormater";
import InputField from "./UserInfo/InputField";
import DoBField from "./UserInfo/DoBField";

const Profile = ({user, confirmChanges, changeReduxForm, startSubmit}) => {
    const {login, email, dateOfBirth, membership} = user;

    return (
        <div className={style.profileWrapper}>
            <div className={style.profileContainer}>
                <Row>
                    <Col md={4} className={style.profileImage}>
                        <img src={profileImage} alt="image"/>
                    </Col>
                    <Col md={8} className={style.userInfo}>
                        <UserInfoItem
                            property='Login'
                            isTitle
                            value={startUpperCase(login)}
                            confirmChanges={confirmChanges}
                            changeReduxForm={changeReduxForm}
                            startSubmit={startSubmit}
                            EditComponent={InputField}
                        />
                        <UserInfoItem
                            property='Email'
                            value={email}
                            confirmChanges={confirmChanges}
                            changeReduxForm={changeReduxForm}
                            startSubmit={startSubmit}
                            EditComponent={InputField}
                        />
                        <UserInfoItem
                            property='Date of Birth'
                            value={dateOfBirth}
                            confirmChanges={confirmChanges}
                            startSubmit={startSubmit}
                            EditComponent={DoBField}
                        />
                        <UserInfoItem
                            property='Membership'
                            linkTo='/membership'
                            value={membership}
                            confirmChanges={confirmChanges}
                        />
                    </Col>
                </Row>
            </div>
        </div>
    )
};

export default Profile;
