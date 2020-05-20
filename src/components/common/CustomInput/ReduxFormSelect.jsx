import React from "react";
import Select from "react-select";

const ReduxFormSelect = ({options, input, width = 100}) => {
    const customStyles = {
        control: base => ({
            ...base,
            width,
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
                onBlur={event => event.preventDefault()}
                styles={customStyles}
            />
        </>
    )
};

export default ReduxFormSelect;
