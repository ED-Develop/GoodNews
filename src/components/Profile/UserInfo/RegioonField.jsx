import React, {useEffect, useState} from "react";
import ReduxFormSelect from "../../common/CustomInput/ReduxFormSelect";
import {Field, reduxForm} from "redux-form";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck} from "@fortawesome/free-solid-svg-icons";
import {findValueInOptions, getRegionOptions} from "../../../helpers/utils";


const RegionField = ({name, onSubmit, initialValues}) => {
    const [regionOptions, setRegionOptions] = useState(null);

    useEffect(() => {
        setRegionOptions(getRegionOptions());
    }, []);

    const handleSubmit = ({region: {value}}) => {
        onSubmit({[name]: value});
    };

    return (
        <p className='d-flex justify-content-between w-100'>
            <span className='mr-2'>Region:</span>
            {
                regionOptions
                    ? <RegionReduxForm
                        options={regionOptions}
                        onSubmit={handleSubmit}
                        initialValues={{region: findValueInOptions(regionOptions, initialValues.region)}}
                    />
                    : <RegionReduxForm
                        options={regionOptions}
                        onSubmit={handleSubmit}
                    />
            }
        </p>
    )
};

let RegionReduxForm = ({handleSubmit, options}) => {
    return (
        <form onSubmit={handleSubmit} className='d-flex justify-content-between w-100'>
            <Field name="region" component={ReduxFormSelect} options={options}/>
            <button type='submit' className='btn btn-danger btn-sm'><FontAwesomeIcon icon={faCheck}/></button>
        </form>
    )
};

RegionReduxForm = reduxForm({form: 'profile'})(RegionReduxForm);

export default RegionField;
