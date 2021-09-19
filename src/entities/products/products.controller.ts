import { Controller, Get, Param } from '@nestjs/common';
import { ProductService } from './products.service';

@Controller()
export class ProductController {
  constructor(private readonly appService: ProductService) {}

  @Get('products')
  getHello(): any {
    return this.appService.findAll();
  }

  @Get('product/:id')
  getProduct(@Param('id') id) {
    return this.appService.findOne(id);
  }
}
