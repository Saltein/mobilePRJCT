import api from '../api/api';

export const deleteFromCartById = async (user_id: number, product_id: number) => {
    try{
        const repsonce = await api.post('/cart/deleteFromCart', { user_id, product_id });
        return repsonce.data;
    }catch(error){
        throw new Error('Ошибка при удалении продуктов: ' + error);
    }
};