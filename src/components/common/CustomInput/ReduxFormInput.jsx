import React from "react";
import {Form, InputGroup} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const ReduxFormInput = ({input, label, type, placeholder, icon, isError, meta}) => {
    let customInput = <Form.Control type={type} {...input} placeholder={placeholder}
                                    isInvalid={isError || (meta.touched && meta.error) }/>;

    return (
        <Form.Group>
            {label &&  <Form.Label>{label}</Form.Label>}
            {icon
                ? <InputGroup>
                    <InputGroup.Prepend>
                        <InputGroup.Text id='inputGroupPrepend'>
                            <FontAwesomeIcon color='#d1d1d1' icon={icon}/>
                        </InputGroup.Text>
                    </InputGroup.Prepend>
                    {customInput}
                    <Form.Control.Feedback type="invalid">{meta.error}</Form.Control.Feedback>
                </InputGroup>
                : customInput
            }
        </Form.Group>
    )
};

export default ReduxFormInput;