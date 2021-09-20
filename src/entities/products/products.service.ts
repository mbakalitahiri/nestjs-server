import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductsEntity } from './products.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductsEntity)
    private productRepository: Repository<ProductsEntity>,
  ) {}

  findAll(): Promise<ProductsEntity[]> {
    return this.productRepository.find();
  }

  findOne(id: number): Promise<ProductsEntity> {
    return this.productRepository.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.productRepository.delete(id);
  }
}
