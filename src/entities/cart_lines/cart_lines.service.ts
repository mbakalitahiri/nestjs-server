import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CartLines } from './cart_lines.entity';

@Injectable()
export class CartLinesService {
  constructor(
    @InjectRepository(CartLines)
    private cartLinesRepository: Repository<CartLines>,
  ) {}

  findAll(): Promise<CartLines[]> {
    return this.cartLinesRepository.find();
  }

  findOne(id: string): Promise<CartLines> {
    return this.cartLinesRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.cartLinesRepository.delete(id);
  }
}
