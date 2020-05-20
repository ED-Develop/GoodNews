import React from "react";
import {Form} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck} from "@fortawesome/free-solid-svg-icons";
import {Field, reduxForm} from "redux-form";
import {email, minLength3, required} from "../../../helpers/validators";
import ReduxFormInput from "../../common/CustomInput/ReduxFormInput";

const InputField = ({name, placeholder, handleSubmit, clearField}) => {
    return (
        <Form onSubmit={handleSubmit} className='d-flex w-100'>
            <Field name={name} validate={name === 'email' ? [email, required] : [minLength3, required]} type="text"
                   placeholder={placeholder}
                   component={(props) => <ReduxFormInput {...props} className='w-100 mr-3 mb-0' size='sm'/>}
                   isClear={true} clearField={clearField}/>

            <button type='submit' className='btn btn-danger btn-sm'><FontAwesomeIcon icon={faCheck}/></button>
        </Form>
    )
};

export default reduxForm({form: 'profile'})(InputField);