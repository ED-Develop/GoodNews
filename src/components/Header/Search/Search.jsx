import React from "react";
import style from './Search.module.css';
import {Form} from "react-bootstrap";
import {Field, reduxForm} from "redux-form";
import ReduxFormInput from "../../common/CustomInput/ReduxFormInput";

const Search = ({handleSubmit}) => {
    return (
        <Form onSubmit={handleSubmit} className={style.search}>
            <Field name='search' placeholder='Type keyword and hit Enter' component={ReduxFormInput}/>
        </Form>
    )
};

const SearchReduxForm = reduxForm({form: 'search'})(Search);

export default SearchReduxForm;