import api from '../api/api';

export const orderFormation = async (user_id: number) => {
    try {
        const response = await api.post('/orders/orderFormation', { user_id });
        console.log('orderFormation.data: ', response.data)
        return response.data.productsData;
    } catch (error) {
        throw new Error('Ошибка при создании заказа: ' + error);
    }
};
