export const formatDateTime = (isoString: string): string => {
    const months = [
        'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
        'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
    ];

    const date = new Date(isoString);

    const day = date.getDate(); // День месяца
    const month = months[date.getMonth()]; // Название месяца
    const year = date.getFullYear(); // Год
    const hours = date.getHours().toString().padStart(2, '0'); // Часы
    const minutes = date.getMinutes().toString().padStart(2, '0'); // Минуты

    return `${day} ${month} ${year} в ${hours}:${minutes}`;
};