import React, {} from "react";
import {generateDateOptions, parseInitialValue} from "../../../helpers/utils";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck} from "@fortawesome/free-solid-svg-icons";
import {Field, reduxForm} from "redux-form";
import ReduxFormSelect from "../../common/CustomInput/ReduxFormSelect";
import {useMediaQuery} from "react-responsive";

const DoBField = ({initialValues, name, onSubmit}) => {
    const dateOptions = generateDateOptions();
    const isMobile = useMediaQuery({ maxWidth: 767 });

    const submitHandler = ({dateOfBirth:{year, month, day}}) => {
        onSubmit({[name]: `${year.value}/${month.value}/${day.value}`});
    };

    return (
        <>
            <DoBReduxForm
                dateOptions={dateOptions}
                initialValues={parseInitialValue(initialValues[name], dateOptions)}
                onSubmit={submitHandler}
                isMobile={isMobile}
            />
        </>
    )
};

let DoBReduxForm = ({handleSubmit, dateOptions, isMobile}) => {
    return (
        <form onSubmit={handleSubmit} className='d-flex justify-content-between w-100'>
            <div className='d-flex'>
                <Field
                    name="dateOfBirth.year"
                    component={ReduxFormSelect}
                    options={dateOptions.year}
                    width={isMobile ? 90 : 120}
                />
                <Field
                    name="dateOfBirth.month"
                    component={ReduxFormSelect}
                    options={dateOptions.month}
                    width={isMobile ? 75 : 90}
                />
                <Field
                    name="dateOfBirth.day"
                    component={ReduxFormSelect}
                    options={dateOptions.day}
                    width={isMobile ? 75 : 90}
                />
            </div>
            <button type='submit' className='btn btn-danger btn-sm'><FontAwesomeIcon icon={faCheck}/></button>
        </form>
    )
};

DoBReduxForm = reduxForm({form: 'profile'})(DoBReduxForm);

export default DoBField;
