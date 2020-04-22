import React from "react";
import Select from "react-select";

const ReduxFormSelect = ({options, input}) => {
    const customStyles = {
        control: base => ({
            ...base,
            width: 120,
            height: 30,
            minHeight: 30,
            marginRight: 4
        }),
        valueContainer: base => ({
            ...base,
            paddingTop: 0,
            paddingBottom: 0,
            height: 30
        }),
        dropdownIndicator: base => ({
            ...base,
            paddingTop: 0,
            paddingBottom: 0,
            height: 30,
            alignItems: 'center'
        })
    };

    return (
        <>
            <Select
                {...input}
                options={options}
                onChange={value => input.onChange(value)}
                onBlur={() => input.onBlur(input.value)}
                styles={customStyles}/>
        </>
    )
};

export default ReduxFormSelect;