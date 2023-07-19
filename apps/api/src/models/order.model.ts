import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { User } from 'models/user.model';
import { ProductIdentification } from 'models/cart.model';

export type OrderDocument = HydratedDocument<Order>;

export enum PaymentMethod {
  CASH = 'Cash',
  CREDIT_CARD = 'Credit card',
  DEBIT_CARD = 'Debit card',
  TRANSFER = 'Trasnfer',
}

export class BillingInfo {
  date: Date;
  paymentMethod: PaymentMethod;
}

@Schema()
export class Order {
  @Prop()
  user: User;

  @Prop()
  products: ProductIdentification[];

  @Prop()
  totalPrice: number;

  @Prop({ type: BillingInfo })
  billing: BillingInfo | null;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
