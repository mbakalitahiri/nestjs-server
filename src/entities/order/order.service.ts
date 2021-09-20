import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrdersEntity } from './order.entity';
import { CartLinesEntity } from '../cart_lines/cart_lines.entity';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(OrdersEntity)
    private orderRepository: Repository<OrdersEntity>,
  ) {}

  findAll(): Promise<OrdersEntity[]> {
    return this.orderRepository.find();
  }

  findOne(id: string): Promise<OrdersEntity> {
    return this.orderRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.orderRepository.delete(id);
  }
}
