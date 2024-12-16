// Объявляем глобальную переменную
let _id: { id: number } | null = null;

/**
 * Функция для изменения глобальной переменной _id
 * @param id - Новый числовой идентификатор, который будет записан в _id
 */
export const updateGlobalId = (id: number): void => {
    _id = { id };
    console.log('id :', _id); // Логируем новое значение для проверки
    console.log('_id updated:', _id); // Логируем новое значение для проверки
};

/**
 * Функция для чтения значения глобальной переменной _id
 * @returns Текущее значение переменной _id
 */
export const getGlobalId = (): { id: number } | null => {
    return _id;
};
