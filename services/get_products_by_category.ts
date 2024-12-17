import api from '../api/api';
import { OrderByUser } from './types';  // предполагаем, что у вас есть тип Order

export const getProductsByCategory = async (category_id: number) => {
    try {
        const response = await api.post('/products/getByCategories', { category_id });
        console.log('getProductsByCategory.data: ', response.data)
        return response.data.productsData;
    } catch (error) {
        throw new Error('Ошибка при получении продуктов категории: ' + error);
    }
};
