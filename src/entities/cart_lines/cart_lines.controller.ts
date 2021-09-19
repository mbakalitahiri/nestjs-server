import { CartLinesService } from './cart_lines.service';
import { Controller, Get, Param } from '@nestjs/common';

@Controller()
export class CartLinesController {
  constructor(private readonly appService: CartLinesService) {}

  @Get('cartlines')
  getHello(): any {
    return this.appService.findAll();
  }

  @Get('cartlines/:id')
  getProduct(@Param('id') id) {
    return this.appService.findOne(id);
  }
}
