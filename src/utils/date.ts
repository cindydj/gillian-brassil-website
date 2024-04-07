export function convertUtcToDateString(utcDate: number) {
    const date = new Date(utcDate);
    const month = date.getMonth() + 1; // Month is 0-indexed.
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    return `${month}/${day} ${hours}:${minutes}:${seconds}`;
}
