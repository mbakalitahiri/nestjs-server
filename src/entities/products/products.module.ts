import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProductController } from './products.controller';
import { ProductsEntity } from './products.entity';
import { ProductService } from './products.service';

@Module({
  imports: [TypeOrmModule.forFeature([ProductsEntity])],
  providers: [ProductService],
  controllers: [ProductController],
  exports: [ProductService],
})
export class ProductModule {}
