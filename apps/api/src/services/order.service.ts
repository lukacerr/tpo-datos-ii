import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Order } from 'models/order.model';

@Injectable()
export class OrdersService {
  constructor(@InjectModel(Order.name) private orderModel: Model<Order>) {}

  async create(data: Order): Promise<Order> {
    const createdOrder = new this.orderModel(data);
    return await createdOrder.save();
  }

  async findAll(): Promise<Order[]> {
    return await this.orderModel.find();
  }

  async findOne(id: number): Promise<Order> {
    return await this.orderModel.findById(id);
  }

  async findByUser(userId: number): Promise<Order[]> {
    return await this.orderModel.find({ 'user.id': Number(userId) });
  }

  async update(id: string, updated: Partial<Order>) {
    return await this.orderModel.findByIdAndUpdate(id, updated);
  }
}
