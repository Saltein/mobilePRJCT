import api from '../api/api';
import { User } from './types';

export const checkPassword = async (email: string, password: string): Promise<User> => {
    try{
        const repsonce = await api.post('/users/login', { email, password });
        return repsonce.data;
    }catch(error){
        throw new Error('Ошибка при получении продуктов: ' + error);
    }
};