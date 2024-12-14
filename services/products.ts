import api from '../api/api';
import { Product } from './types';

export const getProducts = async (): Promise<Product[]> => {
    try{
        const repsonce = await api.get('/products');
        return repsonce.data;
    }catch(error){
        throw new Error('Ошибка при получении продуктов: ' + error);
    }
};