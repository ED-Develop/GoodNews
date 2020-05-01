import React, {useRef} from "react";
import style from './Search.module.css';
import {Form} from "react-bootstrap";
import {Field, reduxForm} from "redux-form";
import ReduxFormInput from "../../common/CustomInput/ReduxFormInput";
import useOutsideClick from "../../../hook/useOutsideClick";
import {injectIntl} from "react-intl";

const Search = ({handleSubmit, onToggleSearch, intl}) => {
    const searchRef = useRef();

    useOutsideClick(onToggleSearch, searchRef);

    return (
        <Form ref={searchRef} onSubmit={handleSubmit} className={style.search}>
            <Field name='search' placeholder={intl.formatMessage({id: 'header.search'})} component={ReduxFormInput}/>
        </Form>
    )
};

const SearchReduxForm = reduxForm({form: 'search'})(Search);

export default injectIntl(SearchReduxForm);
