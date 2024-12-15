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