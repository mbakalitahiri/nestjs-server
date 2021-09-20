import { OrdersEntity } from './order.entity';
import { Controller, Get, Param } from '@nestjs/common';
import { OrderService } from './order.service';
import { getConnection } from 'typeorm';

@Controller()
export class OrderController {
  constructor(private readonly appService: OrderService) {}

  @Get('orders')
  getOrders(): any {
    return this.appService.findAll();
  }

  @Get('orders/:id')
  getProduct(@Param('id') id) {
    return this.appService.findOne(id);
  }

  //   return await this.postRepository.find({
  //   relations: ['images', 'user'],
  //   where: { user: { id: id } },
  // });

  @Get('orderscartlines/:id')
  async getOrdersWithCartLines(@Param('id') id) {
    const orderRepository = getConnection().getRepository(OrdersEntity);
    const cart = await orderRepository.find({
      relations: ['carts'],
      where: { id: id },
    });
    return cart;
  }
}
