import api from '../api/api';
import { User } from './types';


export const registrateUser = async (
    email: string,
    password: string,
    name: string,
    phone: string
): Promise<User> => {
    try {
        const repsonce = await api.post('/users/registration', { email, password, name, phone });
        return repsonce.data;
    } catch (error) {
        throw new Error('Ошибка: ' + error);
    }
};