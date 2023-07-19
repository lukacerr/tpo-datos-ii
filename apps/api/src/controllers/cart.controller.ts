import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiParam, ApiTags } from '@nestjs/swagger';
import { CartsService } from 'services/cart.service';

import { ProductsService } from 'services/product.service';

class ProductDto {
  userId: number;
  productId: string;
  quantity?: number;
}

class ProductForDeleteDto {
  userId: number;
  productId: string;
}

@Controller('cart')
export class CartController {
  constructor(
    private readonly productsService: ProductsService,
    private readonly cartsService: CartsService,
  ) {}

  @ApiTags('Punto 4')
  @Get('/:id')
  async getCart(@Param('id') userId: number) {
    const cart = await this.cartsService.getCart(userId);
    return (await this.productsService.findByIds(cart.map((x) => x.id))).map(
      (x, i) => ({ product: x, quantity: cart[i].quantity }),
    );
  }

  @ApiTags('Punto 3')
  @Post()
  async manageProduct(@Body() { userId, productId, quantity }: ProductDto) {
    return await this.cartsService.addProduct(userId, productId, quantity);
  }

  @ApiTags('Punto 3')
  @Delete()
  async deleteProduct(@Body() { userId, productId }: ProductForDeleteDto) {
    return await this.cartsService.deleteProduct(userId, productId);
  }
}
