import React from "react";
import style from './Login.module.css';
import {Field, reduxForm} from "redux-form";
import {Alert, Button, Form} from "react-bootstrap";
import ReduxFormInput from "../../common/CustomInput/ReduxFormInput";
import {faEnvelope, faUnlockAlt} from "@fortawesome/free-solid-svg-icons";
import {email, minLength, required} from "../../../helpers/validators";
import CustomCheckbox from "../../common/CustomInput/CustomCheckbox";
import {compose} from "redux";
import {FormattedMessage, injectIntl} from "react-intl";

const minLength3 = minLength(3);

const LoginForm = ({handleSubmit, intl, ...props}) => {
    return (
        <Form onSubmit={handleSubmit}>
            <Field
                name="email"
                validate={[required, email]}
                isError={!!props.error}
                component={ReduxFormInput}
                type="text"
                placeholder="Email" icon={faEnvelope}
            />
            <Field
                name="password"
                validate={[required, minLength3]}
                isError={!!props.error}
                component={ReduxFormInput}
                type="password"
                placeholder={intl.formatMessage({id: 'login.password'})}
                icon={faUnlockAlt}
            />
            <Field
                name="rememberMe"
                component={CustomCheckbox}
                label={intl.formatMessage({id: 'login.remember'})}
                id='rememberMe'
            />
            <div className={style.btnSubmit}>
                <Button type='submit' variant='danger'><FormattedMessage id='login.title'/></Button>
            </div>
            {props.error && <Alert variant='danger'>{props.error}</Alert>}
        </Form>
    )
};

export default compose(reduxForm({form: 'login'}), injectIntl)(LoginForm);
