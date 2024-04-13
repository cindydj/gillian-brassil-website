const MONTHS_LONG_TO_SHORT = {
    January: 'Jan',
    February: 'Feb',
    March: 'Mar',
    April: 'Apr',
    May: 'May',
    June: 'Jun',
    July: 'Jul',
    August: 'Aug',
    September: 'Sep',
    October: 'Oct',
    November: 'Nov',
    December: 'Dec',
};

export function convertUtcToDateString(utcDate: number) {
    const date = new Date(utcDate);
    const month = date.getMonth() + 1; // Month is 0-indexed.
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    return `${month}/${day} ${hours}:${minutes}:${seconds}`;
}

export function convertLongMonthToShortMonth(date: string) {
    for (const [longMonth, shortMonth] of Object.entries(
        MONTHS_LONG_TO_SHORT,
    )) {
        if (date.includes(longMonth)) {
            return date.replace(longMonth, shortMonth);
        }
    }
    return date;
}
