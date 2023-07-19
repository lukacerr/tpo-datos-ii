export type ProductIdentification = { id: string; quantity: number };

export class Cart {
  userId: number;
  products: ProductIdentification[];
}
