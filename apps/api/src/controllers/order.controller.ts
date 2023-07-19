import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PaymentMethod } from 'models/order.model';
import { CartsService } from 'services/cart.service';
import { OrdersService } from 'services/order.service';
import { ProductsService } from 'services/product.service';
import { UsersService } from 'services/user.service';
import * as CartUtils from 'utils/cart.utils';

class BillingDto {
  orderId: string;
  method: PaymentMethod;
}

@Controller('order')
export class OrderController {
  constructor(
    private readonly ordersService: OrdersService,
    private readonly usersService: UsersService,
    private readonly cartsService: CartsService,
    private readonly productsService: ProductsService,
  ) {}

  @ApiTags('Punto 5')
  @Post()
  async generate(@Body('id') userId: number) {
    const cart = await this.cartsService.getCart(userId);
    return await this.ordersService.create({
      user: await this.usersService.findOne(userId),
      products: cart,
      totalPrice: CartUtils.getCartPrice(
        await this.productsService.findByIds(cart.map((x) => x.id)),
        cart.map((x) => x.quantity),
      ),
      billing: null,
    });
  }

  @ApiTags('Punto 6')
  @Put()
  async pay(@Body() { orderId, method }: BillingDto) {
    console.log(orderId, method);
    return await this.ordersService.update(orderId, {
      billing: {
        date: new Date(Date.now()),
        paymentMethod: method,
      },
    });
  }

  @ApiTags('Punto 7')
  @Get('/:id')
  async get(@Param('id') userId: number) {
    return await this.ordersService.findByUser(userId);
  }
}
