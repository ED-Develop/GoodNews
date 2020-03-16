import React, {useRef} from "react";
import style from './Search.module.css';
import {Form} from "react-bootstrap";
import {Field, reduxForm} from "redux-form";
import ReduxFormInput from "../../common/CustomInput/ReduxFormInput";
import useOutsideClick from "../../../hook/useOutsideClick";

const Search = ({handleSubmit, onToggleSearch}) => {
    const searchRef = useRef();

    useOutsideClick(onToggleSearch, searchRef);

    return (
        <Form ref={searchRef} onSubmit={handleSubmit} className={style.search}>
            <Field name='search' placeholder='Type keyword and hit Enter' component={ReduxFormInput}/>
        </Form>
    )
};

const SearchReduxForm = reduxForm({form: 'search'})(Search);

export default SearchReduxForm;