import api from '../api/api';

export async function getUserById(user_id: number): Promise<{ name: string; email: string }> {
    try {
        const response = await api.get('/users/' + user_id);
        return response.data;
    } catch (error) {
        throw new Error('Ошибка при получении заказа пользователя: ' + error);
    }
};
