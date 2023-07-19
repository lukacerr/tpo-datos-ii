import { Product } from 'models/product.model';

export function getCartPrice(products: Product[], qs: number[]): number {
  return products.reduce((a, x, i) => a + x.price * qs[i], 0);
}
