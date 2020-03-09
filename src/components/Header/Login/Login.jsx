import React from "react";
import style from './Login.module.css'
import LoginReduxForm from "./LoginReduxForm";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";

const Login = ({closeLoginForm, login}) => {
    const onCloseLoginForm = () => {
        closeLoginForm(false);
    };

    const onSubmit = (formData) => {
        login(formData);
    };

    return (
        <div className={style.overlay}>
            <div className={style.wrapper}>
                <div onClick={onCloseLoginForm} className={style.closeBtn}>
                    <FontAwesomeIcon icon={faTimes}/>
                </div>
                <h4>Login</h4>
                <LoginReduxForm initialValues={{email: "admin@gmail.com", password: '12345'}}  onSubmit={onSubmit}/>
            </div>
        </div>
    )
};

export default Login;