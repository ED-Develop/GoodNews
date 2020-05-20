export const required = value => (value || typeof value === 'number' ? undefined : {id: 'validate.required'});

export const email = value => {
    return value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? {id: 'validate.email'} : undefined;
};

export const minLength = min => value => {
    return value && value.length < min ? {id: 'validate.minLength', values: {min},} : undefined;
};

export const minLength3 = minLength(3);
