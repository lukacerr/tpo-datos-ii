import { Injectable } from '@nestjs/common';
import { RedisService } from '@liaoliaots/nestjs-redis';
import Redis from 'ioredis';
import { ProductIdentification } from 'models/cart.model';

@Injectable()
export class CartsService {
  private readonly redis: Redis;
  constructor(private readonly redisService: RedisService) {
    this.redis = this.redisService.getClient();
  }

  async getCart(userId: number): Promise<ProductIdentification[]> {
    const res = await this.redis.hgetall(userId.toString());

    return Object.entries(res).map(([k, v]) => ({
      id: k,
      quantity: parseInt(v),
    }));
  }

  async addProduct(userId: number, productId: string, quantity = 1) {
    return await this.redis.hincrby(userId.toString(), productId, quantity);
  }

  async deleteProduct(userId: number, productId: string) {
    return await this.redis.hdel(userId.toString(), productId);
  }
}
