export const getToday = (): string => {
    const today = new Date();
    return formatDate(today);
};

export const getThisMonth = (): [string, string] => {
    const today = new Date();
    const firstDay = new Date(today.getFullYear(), today.getMonth(), 1);
    const lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0);
    return [formatDate(firstDay), formatDate(lastDay)];
};

export const getThisYear = (): [string, string] => {
    const today = new Date();
    const firstDay = new Date(today.getFullYear(), 0, 1);
    const lastDay = new Date(today.getFullYear(), 11, 31);
    return [formatDate(firstDay), formatDate(lastDay)];
};

// Định nghĩa kiểu của tham số 'date' là 'Date'
export const formatDate = (date: Date): string => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
};
