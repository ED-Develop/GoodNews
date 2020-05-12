export const articleDateFormatter = (date) => {
    let dateObj = new Date(date);
    let time = dateFormatter({hour: '2-digit', minute: '2-digit'}, dateObj);
    let month = dateFormatter({month: 'short'}, dateObj);
    let day = dateFormatter({day: '2-digit'}, dateObj);

    return `${time} on ${month} ${day}`;
};

const dateFormatter = (options, date) => {
    return new Intl.DateTimeFormat('en', options).format(date)
};
