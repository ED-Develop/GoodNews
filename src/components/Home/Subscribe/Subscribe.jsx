import React from "react";
import style from './Subscribe.module.css';
import {Form} from "react-bootstrap";
import {Field, reduxForm} from "redux-form";
import ReduxFormInput from "../../common/CustomInput/ReduxFormInput";
import {email, required} from "../../../helpers/validators";
import {CSSTransitionGroup} from "react-transition-group";
import {FormattedMessage} from "react-intl";

const Subscribe = ({subscribe, isSubscribeChange}) => {
    const onSubmit = (formData) => {
        subscribe(formData.email)
    };

    return (
        <div className={style.subscribe}>
            <h3><FormattedMessage id='subscription.title'/></h3>
            <p><FormattedMessage id='subscription.description'/></p>
            <CSSTransitionGroup transitionName="fade" transitionEnterTimeout={300} transitionLeaveTimeout={300}>
                {isSubscribeChange && <p className='text-success'>
                    <FormattedMessage id='subscription.success'/>

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
            <button type='submit'><FormattedMessage id='subscription.button'/></button>
        </Form>
    )
};

SubscribeForm = reduxForm({form: 'subscribe'})(SubscribeForm);

export default Subscribe;
