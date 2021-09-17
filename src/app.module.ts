import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Orders } from './entities/order.entity';
import { OrdersModule } from './entities/orders.module';
import { OrderController } from './order.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'mohtadi',
      password: 'Estocolmo1',
      database: 'ecommerce',
      entities: [Orders],
      synchronize: true,
    }),
    OrdersModule,
  ],
  controllers: [OrderController],
  providers: [],
})
export class AppModule {}
