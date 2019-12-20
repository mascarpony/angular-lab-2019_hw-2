export class Product {
  constructor(
    public name: string,
    public price: number,
    public description: string,
  ) {}
}

export const PRODUCTS = [
    { name: 'Salame and Parma', price: 35 , description: 'Сlassic and most delicious pinza'},
    { name: 'Tuna and Onion', price: 30 , description: 'Best choise for tuna lovers'},
    { name: 'Vegetarian', price: 28 , description: 'For those who cares)'},
    { name: 'Salame and Gorgonsola', price: 33, description: 'Gourmet choise' },
    { name: 'Cola', price: 5, description: 'Legendary drink' },
    { name: 'San Pelegrino', price: 7, description: 'fruit lemonade' },
    { name: 'Water', price: 5, description: 'Still or sparkling' },
    { name: 'Coffee', price: 5, description: 'Will keep you awake' },
    { name: 'Salad', price: 20, description: 'Always fresh' },
    { name: 'Panna cotta', price: 15, description: 'Dessert' },
];

