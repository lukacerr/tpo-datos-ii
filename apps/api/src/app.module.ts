import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { User } from 'models/user.model';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersService } from 'services/user.service';
import { RedisModule } from '@liaoliaots/nestjs-redis';
import { ProductsService } from 'services/product.service';
import { CartsService } from 'services/cart.service';
import { Product, ProductSchema } from 'models/product.model';
import { OrdersService } from 'services/order.service';
import { Order, OrderSchema } from 'models/order.model';
import { UserController } from 'controllers/user.controller';
import { ProductController } from 'controllers/product.controller';
import { OrderController } from 'controllers/order.controller';
import { CartController } from 'controllers/cart.controller';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.PGSQL_HOST,
      port: Number(process.env.PGSQL_PORT),
      username: process.env.PGSQL_USER,
      password: process.env.PGSQL_PASSWORD,
      database: process.env.PGSQL_DBNAME,
      entities: [User],
      synchronize: true,
      autoLoadEntities: true,
    }),
    RedisModule.forRoot({
      config: {
        host: process.env.REDIS_HOST,
        port: parseInt(process.env.REDIS_PORT),
        username: process.env.REDIS_USER,
        password: process.env.REDIS_PASSWORD,
      },
    }),
    MongooseModule.forRoot(process.env.MONGO_URL),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../', 'client/dist'),
    }),
    TypeOrmModule.forFeature([User]),
    MongooseModule.forFeature([
      { name: Product.name, schema: ProductSchema },
      { name: Order.name, schema: OrderSchema },
    ]),
  ],
  controllers: [
    UserController,
    ProductController,
    OrderController,
    CartController,
  ],
  providers: [UsersService, ProductsService, CartsService, OrdersService],
})
export class AppModule {}
