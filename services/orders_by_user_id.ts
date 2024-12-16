import api from '../api/api';
import { OrderByUser } from './types';  // предполагаем, что у вас есть тип Order

export const getOrdersByUserId = async (id: string): Promise<OrderByUser> => {
    try {
        const response = await api.post('/orders/findOneUser', { id });
        return response.data;
    } catch (error) {
        throw new Error('Ошибка при получении заказа пользователя: ' + error);
    }
};
