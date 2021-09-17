import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Orders } from './order.entity';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Orders)
    private orderRepository: Repository<Orders>,
  ) {}

  findAll(): Promise<Orders[]> {
    return this.orderRepository.find();
  }

  findOne(id: string): Promise<Orders> {
    return this.orderRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.orderRepository.delete(id);
  }
}
