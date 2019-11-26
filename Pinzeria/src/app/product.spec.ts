import { Product } from './product';

describe('Product', () => {
  it('should create an instance', () => {
    expect(new Product('test', 10, 'test description')).toBeTruthy();
  });
});
