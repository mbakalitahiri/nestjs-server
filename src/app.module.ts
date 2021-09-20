import { ProductController } from './entities/products/products.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CartLinesController } from './entities/cart_lines/cart_lines.controller';
import { CartLinesEntity } from './entities/cart_lines/cart_lines.entity';
import { CartLinesModule } from './entities/cart_lines/cart_lines.module';
import { OrderController } from './entities/order/order.controller';
import { OrdersEntity } from './entities/order/order.entity';
import { OrdersModule } from './entities/order/orders.module';
import { ProductsEntity } from './entities/products/products.entity';
import { ProductModule } from './entities/products/products.module';

import { LoggerModule } from 'nestjs-pino';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'mohtadi',
      password: 'Estocolmo1',
      database: 'ecommerce',
      entities: [OrdersEntity, CartLinesEntity, ProductsEntity],
      synchronize: true,
    }),
    OrdersModule,
    CartLinesModule,
    ProductModule,
    LoggerModule.forRoot(),
  ],
  controllers: [OrderController, CartLinesController, ProductController],
  providers: [],
})
export class AppModule {}
