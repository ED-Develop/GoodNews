import React, {useRef, useState} from "react";
import style from "../Profile.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit} from "@fortawesome/free-solid-svg-icons";
import {NavLink} from "react-router-dom";
import DoBField from "./DoBField";
import InputField from "./InputField";
import {formatToKey} from "../../../helpers/stringFormater";
import useOutsideClick from "../../../hook/useOutsideClick";

const UserInfoItem = ({isTitle, isLink, property, value, typeField, confirmChanges, changeReduxForm, startSubmit}) => {
    const [editMode, setEditMode] = useState(false);
    const onEditMode = () => setEditMode(true);

    const fieldRef = useRef();

    const submitProfileForm = (editMode) => {
        if (editMode) {
            startSubmit('profile');
            setEditMode(false);
        }
    };

    useOutsideClick(submitProfileForm, fieldRef, editMode);

    const key = formatToKey(property);
    const clearField = () => changeReduxForm('profile', key, '');

    const onSubmit = (data) => {
        setEditMode(false);
        confirmChanges(data);
    };

    const info = <>
        {isTitle ? <h2>{value}</h2>
            : <p><span>{property}:</span> {value}</p>}
        {isLink ? <NavLink className='btn btn-danger btn-sm' to='/membership'><FontAwesomeIcon icon={faEdit}/></NavLink>
            : <button onClick={onEditMode} className='btn btn-danger btn-sm'><FontAwesomeIcon icon={faEdit}/></button>}
    </>;

    const edit = <>
        {typeField === 'input' && <InputField name={key} initialValues={{[key]: value}} onSubmit={onSubmit}
                                              clearField={clearField} placeholder={property}/>}
        {typeField === 'datepicker' && <DoBField name={key} date={value} onSubmit={onSubmit}/>}
    </>;

    return (
        <div ref={fieldRef} className={style.userInfoItem}>
            {editMode ? edit : info}
        </div>
    )
};


export default UserInfoItem;