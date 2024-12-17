import api from '../api/api';

export const getCategories = async () => {
    try{
        const repsonce = await api.get('/categories');
        return repsonce.data;
    }catch(error){
        throw new Error('Ошибка при получении категорий: ' + error);
    }
};