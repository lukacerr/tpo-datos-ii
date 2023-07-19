import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProductDocument = HydratedDocument<Product>;

export type Comment = { username: string; text: string };

@Schema()
export class Product {
  @Prop()
  title: string;

  @Prop()
  price: number;

  @Prop()
  description: string;

  @Prop()
  multimedia: string[];

  @Prop()
  comments?: Comment[];
}

export const ProductSchema = SchemaFactory.createForClass(Product);
