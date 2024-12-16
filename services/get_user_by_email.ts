import api from '../api/api';
import { User } from './types';

export const getUserByEmail = async (email: string): Promise<User> => {
    try{
        const repsonce = await api.post('/users/findByEmail', { email });
        return repsonce.data;
    }catch(error){
        throw new Error('Ошибка при получении продуктов: ' + error);
    }
};