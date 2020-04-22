export const startUpperCase = (str) => {
    return str[0].toUpperCase() + str.slice(1);
};

export const formatToKey = str => str
    .split(' ')
    .map((item, index) => index === 0 ? item.toLowerCase() : startUpperCase(item))
    .join('');
