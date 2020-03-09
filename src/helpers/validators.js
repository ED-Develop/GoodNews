export const required = value => (value || typeof value === 'number' ? undefined : 'Field is required!');

export const email = value => {
    return value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Invalid email address!' : undefined
};

export const minLength = min => value => {
    return value && value.length < min ? `Must be ${min} characters or more!` : undefined;
};