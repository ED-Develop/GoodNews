import React from "react";
import style from './Subscribe.module.css';
import {Form} from "react-bootstrap";
import {reduxForm} from "redux-form";

const Subscribe = () => {
    return (
        <div className={style.subscribe}>
            <h3>Good News Newsetter</h3>
            <p>Subscribe to our email newsletter for good news, sent out every Monday</p>
            <SubscribeForm/>
        </div>
    )
};

let SubscribeForm = () => {
    return (
        <Form className={style.subscribeForm}>
            <Form.Control type='text' placeholder='Email'/>
            <button type='submit'>Subscribe</button>
        </Form>
    )
};

SubscribeForm = reduxForm({form: 'subscribe'})(SubscribeForm);

export default Subscribe;