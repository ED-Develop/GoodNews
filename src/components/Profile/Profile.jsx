import React from "react";
import style from './Profile.module.css';
import {Col, Row} from "react-bootstrap";
import profileImage from '../../assets/image/user.jpg';

const Profile = ({userName}) => {
    return (
        <div className={style.profileWrapper}>
            <div className={style.profileContainer}>
                <Row>
                    <Col md={4} className={style.profileImage}>
                        <img src={profileImage} alt="image"/>
                    </Col>
                    <Col md={8} className={style.userInfo}>
                        <h2>Admin</h2>
                        <p><span>Date of Birth:</span> 26.07.1999</p>
                        <p><span>Your tariff plan:</span> trial for 30 days</p>
                        <p><span>Your news region:</span> USA</p>
                    </Col>
                </Row>
            </div>
        </div>
    )
};

export default Profile;