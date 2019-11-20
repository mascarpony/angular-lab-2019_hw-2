export interface Product {
    id: number,
    name: string,
    price: number,
    available_quantity: number
}

export const PRODUCTS: Array<Product> = [
    { id: 1, name: 'Fresh salad', price: 100, available_quantity: 10 },
    { id: 2, name: 'Carrot sticks', price: 80, available_quantity: 19 },
    { id: 3, name: 'Celery juice', price: 130, available_quantity: 20 },
    { id: 4, name: 'Freshburger', price: 200, available_quantity: 16 },
    { id: 5, name: 'Tomato chips', price: 150, available_quantity: 9 },
    { id: 6, name: 'Royal Apples', price: 300, available_quantity: 29 },
    { id: 7, name: 'Nuts', price: 500, available_quantity: 23 },
    { id: 8, name: 'Dried seaweed', price: 330, available_quantity: 11 },
    { id: 9, name: 'Golden mango', price: 450, available_quantity: 15 },
    { id: 10, name: 'Spring roll', price: 260, available_quantity: 7 }
  ];