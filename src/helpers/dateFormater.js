export const articleDateFormatter = (date) => {
    let month;

    switch (date.slice(5, date.indexOf('T') - 3)) {
        case '01':
            month = 'Jan';
            break;
        case '02':
            month = 'Feb';
            break;
        case '03':
            month = 'March';
            break;
        case '04':
            month = 'Apr';
            break;
        case '05':
            month = 'May';
            break;
        case '06':
            month = 'Jun';
            break;
        case '07':
            month = 'Jul';
            break;
        case '08':
            month = 'Aug';
            break;
        case '09':
            month = 'Sept';
            break;
        case '10':
            month = 'Oct';
        case '11':
            month = 'Nov';
            break;
        case  '12':
            month = 'Dec';
            break;
        default:
            month = 'Undefined';
            break;
    }

    return date.slice(date.indexOf('T') + 1, date.lastIndexOf(':')) + ' on ' + month + ' '
        + date.slice(date.indexOf('T') - 2, date.lastIndexOf('T'));
};


export const archiveDateFormatter = (date) => {
    let archiveDates = [];

    for (let i = 0; i < 12; i++) {
        date.setDate(1);

        let archiveDate = {
            title: new Intl.DateTimeFormat('en', {month: 'long', year: 'numeric'}).format(date),
            from: new Intl.DateTimeFormat('default', {month: '2-digit', year: 'numeric', day: '2-digit'}).format(date)
        };

        date.setMonth(date.getMonth() - 1);
        archiveDates.push(archiveDate);
    }

    return archiveDates
};