export const getCurrentDate = () => {
    const date = new Date();
    const currentDate = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
    const currentTime = date.getHours() + ':' + date.getMinutes();
    return currentDate + ' ' + currentTime;
}
