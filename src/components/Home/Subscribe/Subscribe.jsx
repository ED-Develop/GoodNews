import React from "react";
import style from './Subscribe.module.css';
import {Form} from "react-bootstrap";
import {Field, reduxForm} from "redux-form";
import ReduxFormInput from "../../common/CustomInput/ReduxFormInput";
import {email, required} from "../../../helpers/validators";
import {CSSTransitionGroup} from "react-transition-group";

const Subscribe = ({subscribe, isSubscribeChange}) => {
    const onSubmit = (formData) => {
        subscribe(formData.email)
    };

    return (
        <div className={style.subscribe}>
            <h3>Good News Newsetter</h3>
            <p>Subscribe to our email newsletter for good news, sent out every Monday</p>
            <CSSTransitionGroup transitionName="fade" transitionEnterTimeout={300} transitionLeaveTimeout={300}>
                {isSubscribeChange && <p className='text-success'>
                    Thank you for joining our mailing list! Please check your email for a confirmation link.
                </p>}
                {!isSubscribeChange && <SubscribeForm onSubmit={onSubmit}/>}
            </CSSTransitionGroup>
        </div>
    )
};

let SubscribeForm = ({handleSubmit}) => {
    return (
        <Form onSubmit={handleSubmit} className={style.subscribeForm}>
            <Field name='email' type='text' validate={[required, email]} placeholder='Email'
                   component={ReduxFormInput}/>
            <button type='submit'>Subscribe</button>
        </Form>
    )
};

SubscribeForm = reduxForm({form: 'subscribe'})(SubscribeForm);

export default Subscribe;
