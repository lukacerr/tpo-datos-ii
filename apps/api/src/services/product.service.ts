import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from 'models/product.model';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>,
  ) {}

  async create(data: Product): Promise<Product> {
    const createdProduct = new this.productModel(data);
    return createdProduct.save();
  }

  async findAll(): Promise<Product[]> {
    return this.productModel.find().exec();
  }

  async findByIds(ids: string[]): Promise<Product[]> {
    return this.productModel.find({ _id: { $in: ids } });
  }

  async findById(id: string): Promise<Product> {
    return this.productModel.findOne({ _id: id });
  }

  async updateOne(_id: string, updated: Product) {
    return await this.productModel.findByIdAndUpdate(_id, updated);
  }
}
