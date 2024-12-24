import api from '../api/api';

export const getPopularProducts = async () => {
    try{
        const repsonce = await api.get('/ordersItems/getTopProducts');
        return repsonce.data;
    }catch(error){
        throw new Error('Ошибка при получении популярных продуктов: ' + error);
    }
};