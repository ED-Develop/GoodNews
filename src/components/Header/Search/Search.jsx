import React, {useRef} from "react";
import style from './Search.module.css';
import {Button, Form} from "react-bootstrap";
import {Field, reduxForm} from "redux-form";
import ReduxFormInput from "../../common/CustomInput/ReduxFormInput";
import useOutsideClick from "../../../hook/useOutsideClick";
import {FormattedMessage, injectIntl} from "react-intl";
import Mobile from "../../common/MediaQuery/Mobile";

const Search = ({handleSubmit, onToggleSearch, intl, placeholder = 'header.search'}) => {
    const searchRef = useRef();

    useOutsideClick(onToggleSearch, onToggleSearch ? searchRef : null);

    return (
        <Form ref={searchRef} onSubmit={handleSubmit} className={style.search}>
            <Field
                name='search'
                placeholder={intl.formatMessage({id: placeholder})}
                component={ReduxFormInput}
                className={style.searchInput}
            />
            <Mobile>
                <Button variant={"danger"} type='submit'><FormattedMessage id='header.searchBtn'/></Button>
            </Mobile>
        </Form>
    )
};

const SearchReduxForm = reduxForm({form: 'search'})(Search);

export default injectIntl(SearchReduxForm);
