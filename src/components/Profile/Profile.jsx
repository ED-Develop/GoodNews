import React from "react";
import style from './Profile.module.css';
import {Col, Row} from "react-bootstrap";
import profileImage from '../../assets/image/user.jpg';
import UserInfoItem from "./UserInfo/UserInfoItem";
import {startUpperCase} from "../../helpers/stringFormater";

const Profile = ({user, confirmChanges, changeReduxForm, startSubmit}) => {
    const {login, email, dateOfBirth, membership, region} = user;

    return (
        <div className={style.profileWrapper}>
            <div className={style.profileContainer}>
                <Row>
                    <Col md={4} className={style.profileImage}>
                        <img src={profileImage} alt="image"/>
                    </Col>
                    <Col md={8} className={style.userInfo}>
                        <UserInfoItem property='Login' value={startUpperCase(login)} isTitle={true} typeField='input'
                                      confirmChanges={confirmChanges} changeReduxForm={changeReduxForm}
                                      startSubmit={startSubmit}/>
                        <UserInfoItem property='Email' value={email} typeField='input'
                                      confirmChanges={confirmChanges} changeReduxForm={changeReduxForm}
                                      startSubmit={startSubmit}/>
                        <UserInfoItem property='Date of Birth' value={dateOfBirth} typeField='datepicker'
                                      confirmChanges={confirmChanges} startSubmit={startSubmit}/>
                        <UserInfoItem property='Membership' value={membership} isLink={true}
                                      confirmChanges={confirmChanges}/>
                        <UserInfoItem property='Region' value={region || 'USA'} typeField='select'
                                      confirmChanges={confirmChanges}/>
                    </Col>
                </Row>
            </div>
        </div>
    )
};

export default Profile;