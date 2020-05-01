import React, {useRef, useState} from "react";
import style from "../Profile.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit} from "@fortawesome/free-solid-svg-icons";
import {NavLink} from "react-router-dom";
import useOutsideClick from "../../../hook/useOutsideClick";

const UserInfoItem = ({isTitle, title, property, value, confirmChanges, changeReduxForm, startSubmit, EditComponent}) => {
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

    const clearField = () => changeReduxForm('profile', property, '');

    const onSubmit = (data) => {
        setEditMode(false);
        confirmChanges(data);
    };

    const info = <>
        {isTitle
            ? <h2>{value}</h2>
            : <p><span>{title}:</span> {value}</p>}

        {typeof EditComponent === 'string'
            ? <NavLink className='btn btn-danger btn-sm' to={EditComponent}><FontAwesomeIcon icon={faEdit}/></NavLink>
            : <button onClick={onEditMode} className='btn btn-danger btn-sm'><FontAwesomeIcon icon={faEdit}/></button>}
    </>;

    const edit = (EditComponent && <EditComponent
        name={property}
        initialValues={{[property]: value}}
        onSubmit={onSubmit}
        clearField={clearField}
        placeholder={title}
    />);

    return (
        <div ref={fieldRef} className={style.userInfoItem}>
            {editMode ? edit : info}
        </div>
    )
};


export default UserInfoItem;
