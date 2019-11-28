export interface Product {
  id: number,
  name: string,
  price: number,
  available_quantity: number,
  description?: string,
  img: string,
}

export const PRODUCTS: Array<Product> = [
  { 
    id: 1, 
    name: 'Fresh salad', 
    price: 100, 
    available_quantity: 10, 
    description: "", 
    img: 'fresh_salad.jpg' 
  },
  { 
    id: 2, 
    name: 'Carrot sticks', 
    price: 80, 
    available_quantity: 19, 
    description: "", 
    img: 'carrot_sticks.jpg' 
  },
  { id: 3, 
    name: 'Celery juice', 
    price: 130, 
    available_quantity: 20, 
    description: "", 
    img: 'celery_juice.jpg' 
  },
  { id: 4, 
    name: 'Freshburger', 
    price: 200, 
    available_quantity: 16, 
    description: "", 
    img: 'freshburger.jpg' 
  },
  { 
    id: 5, 
    name: 'Tomato chips', 
    price: 150, 
    available_quantity: 9, 
    description: "", 
    img: 'tomato_chips.jpg' 
  },
  { 
    id: 6, 
    name: 'Royal Apples', 
    price: 300, 
    available_quantity: 29, 
    description: "", 
    img: 'royal_apples.jpg' 
  },
  { 
    id: 7, 
    name: 'Nuts mix', 
    price: 500, 
    available_quantity: 23, 
    description: "", 
    img: 'nuts_mix.jpg' 
  },
  { 
    id: 8, 
    name: 'Dried seaweed', 
    price: 330, 
    available_quantity: 11, 
    description: "", 
    img: 'dried_seaweed.jpg' 
  },
  { 
    id: 9, 
    name: 'Golden mango', 
    price: 450, 
    available_quantity: 15, 
    description: "", 
    img: 'golden_mango.jpg' 
  },
  { 
    id: 10, 
    name: 'Spring roll', 
    price: 260, 
    available_quantity: 7, 
    description: "", 
    img: 'spring_roll.jpg' 
  }
];

export const CARTPRODUCTS: Array<Product> = [];