import { getDatabase } from "../db";

export const userModel = {
    addUser: async(name: string, email: string, phone: string,
                    address: string) => {
        const db = getDatabase();
        const query = `
        INSERT INTO users (name, email, phone, address)
        VALUES (?, ?, ?, ?);
        `;
        const result = await db.runAsync(query, name, email, phone, address);
        },
        getUserById: async(id: number) => {
            const db = getDatabase();
            const query = 'SELECT * FROM users WHERE id = ?';
            const user = await db.getFirstAsync(query, id);
            return user;
        }      
}