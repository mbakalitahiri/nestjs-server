import { Controller, Get, Param } from '@nestjs/common';
import { OrderService } from './order.service';

@Controller()
export class OrderController {
  constructor(private readonly appService: OrderService) {}

  @Get('orders')
  getHello(): any {
    return this.appService.findAll();
  }

  @Get('orders/:id')
  getProduct(@Param('id') id) {
    return this.appService.findOne(id);
  }
}
