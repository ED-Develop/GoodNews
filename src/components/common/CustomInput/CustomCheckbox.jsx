import React from "react";
import style from './CustomInput.module.css';

const CustomCheckbox = ({input, label}) => {
    return (
        <label className={style.customCheckbox}>
            <input {...input} type="checkbox"/>
            <span className={style.checkmark}></span>
            {label}
        </label>
    )
};

export default CustomCheckbox;