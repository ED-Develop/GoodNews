import React from "react";
import style from './CustomInput.module.css';
import {Form, InputGroup} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import {FormattedMessage} from "react-intl";

const ReduxFormInput = ({input, label, type, placeholder, icon, isError, meta, className, size, isClear, clearField}) => {
    const customInput = <Form.Control
        size={size}
        type={type}
        placeholder={placeholder}
        isInvalid={isError || (meta.touched && meta.error)}
        {...input}
    />;

    return (
        <Form.Group className={className + ' ' + style.formGroup}>
            {label && <Form.Label>{label}</Form.Label>}
            <InputGroup>
                {icon && (
                    <InputGroup.Prepend>
                        <InputGroup.Text id='inputGroupPrepend'>
                            <FontAwesomeIcon color='#d1d1d1' icon={icon}/>
                        </InputGroup.Text>
                    </InputGroup.Prepend>
                )}

                {isClear && (
                    <InputGroup.Append className={style.clear} onClick={clearField}>
                        <InputGroup.Text id='inputGroupAppend'>
                            <FontAwesomeIcon color='#d1d1d1' icon={faTimes}/>
                        </InputGroup.Text>
                    </InputGroup.Append>
                )}
                {customInput}
                {meta.error && (
                    <Form.Control.Feedback type="invalid">
                        <FormattedMessage {...meta.error}/>
                    </Form.Control.Feedback>
                )}
            </InputGroup>
        </Form.Group>
    )
};

export default ReduxFormInput;
