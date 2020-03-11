import React from "react";
import style from './Profile.module.css';
import {Col, Row} from "react-bootstrap";
import profileImage from '../../assets/image/user.jpg';

const Profile = ({userName}) => {
    return (
        <div className={style.profileWrapper}>
           <Row className='d-flex justify-content-center'>
               <Col md={4} className={style.profileImage}>
                   <img src={profileImage} alt="image"/>
               </Col>
               <Col md={6} className={style.userInfo}>
                    <h2>Admin</h2>
               </Col>
           </Row>
        </div>
    )
};

export default Profile;