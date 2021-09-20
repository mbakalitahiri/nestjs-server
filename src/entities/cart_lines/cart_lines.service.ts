import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CartLinesEntity } from './cart_lines.entity';

@Injectable()
export class CartLinesService {
  constructor(
    @InjectRepository(CartLinesEntity)
    private cartLinesRepository: Repository<CartLinesEntity>,
  ) {}

  findAll(): Promise<CartLinesEntity[]> {
    return this.cartLinesRepository.find();
  }

  findOne(id: string): Promise<CartLinesEntity> {
    return this.cartLinesRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.cartLinesRepository.delete(id);
  }
}
