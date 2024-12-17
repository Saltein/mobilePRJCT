import api from '../api/api';

export const addProductToCartById = async (user_id: number, product_id: number, quantity: number) => {
    try {
        const response = await api.post('/cart/add', { user_id, product_id, quantity });
        return response.data;
    } catch (error) {
        throw new Error('Ошибка при добавлении в корзину: ' + error);
    }
};
