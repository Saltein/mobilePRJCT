import api from '../api/api';

export const getCartByUserId = async (user_id: number) => {
    try {
        const response = await api.post('/cart/getUserCart', { user_id });
        return response.data;
    } catch (error) {
        throw new Error('Ошибка при получении заказа пользователя: ' + error);
    }
};
