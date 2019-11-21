export interface Product {
    id: number,
    name: string,
    price: number,
    available_quantity: number,
    description?: string,
}

export const PRODUCTS: Array<Product> = [
    { id: 1, name: 'Fresh salad', price: 100, available_quantity: 10, description: "" },
    { id: 2, name: 'Carrot sticks', price: 80, available_quantity: 19, description: "" },
    { id: 3, name: 'Celery juice', price: 130, available_quantity: 20, description: "" },
    { id: 4, name: 'Freshburger', price: 200, available_quantity: 16, description: "" },
    { id: 5, name: 'Tomato chips', price: 150, available_quantity: 9, description: "" },
    { id: 6, name: 'Royal Apples', price: 300, available_quantity: 29, description: "" },
    { id: 7, name: 'Nuts', price: 500, available_quantity: 23, description: "" },
    { id: 8, name: 'Dried seaweed', price: 330, available_quantity: 11, description: "" },
    { id: 9, name: 'Golden mango', price: 450, available_quantity: 15, description: "" },
    { id: 10, name: 'Spring roll', price: 260, available_quantity: 7, description: "" }
  ];