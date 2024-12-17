import api from '../api/api';

export const updateAddress = async (user_id: number, address: string) => {
    try{
        const repsonce = await api.put('/users/' + user_id, { address });
        return repsonce.data;
    }catch(error){
        console.log('/users/' + user_id)
        throw new Error('Ошибка при обновлении адреса: ' + error);
    }
};