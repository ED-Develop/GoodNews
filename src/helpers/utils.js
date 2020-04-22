export const generateSelectOptions = (start, end) => {
    const options = [];

    for (let i = start; i <= end; i++) {
        let value = i.toString();

        if (value.length < 2) value = '0' + value;

        options.push({value, label: value});
    }

    return [...options]
};

export const generateDateOptions = () => {
    return {
        year: generateSelectOptions(1900, 2020).reverse(),
        month: generateSelectOptions(1, 12),
        day: generateSelectOptions(1, 31)
    }
};

export const parseInitialValue = (string, options) => {
    const values = string.split('/');

    return {
        dateOfBirth: {
            year: findValueInOptions(options.year, values[0]),
            month: findValueInOptions(options.month, values[1]),
            day: findValueInOptions(options.day, values[2]),
        }
    };
};

const findValueInOptions = (arr, value) => {
    return arr.find(i => +i.value === +value);
};