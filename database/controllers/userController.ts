import { userModel } from "../models/userModel";

export const userController = {
    addNewUser: async(name: string, email: string, phone: string,
                         address: string) => {
        const userId = await userModel.addUser(name, email, phone, address);
        return userId;
         },
    getUser: async(id: number) => {
        const user = await userModel.getUserById(id);
        return user;
    }
                        
}