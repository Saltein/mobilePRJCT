export interface Product {
    id: number;
    name: string;
    category_id: number;
    price: number;
    image_url?: string;
    stock: number;
    description?: string;
    product_weight?: number;
}


export interface OrderItem {
    quantity: number;
    price: string;
    product: Product;
}

export interface OrderByUser {
    id: number;
    user_id: number;
    total_price: string;
    status: string;
    created_at: string;
    OrderItems: OrderItem[];
    orderData: OrderByUser[];
}


export interface User {
    id: number;
    name: string;
    email: string;
    password: string;
    phone: string;
    address: string;
    created_at: string;
    message: string;
}