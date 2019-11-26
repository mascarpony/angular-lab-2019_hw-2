export class Product {
  constructor(
    public name: string,
    public price: number,
    public description: string,
  ) {}
}

export const PRODUCTS = [
    { name: 'Salame and Parma', price: 30 , description: 'Сlassic and most delicious pinza'},
    { name: 'Cola', price: 5, description: 'Legendary drink' },
    { name: 'Coffe', price: 5, description: 'Will keep you awake' },
    { name: 'Salad', price: 5, description: 'Always fresh' }
];
