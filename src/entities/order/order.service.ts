import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrdersEntity } from './order.entity';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(OrdersEntity)
    private orderRepository: Repository<OrdersEntity>,
  ) {}

  findAll(): Promise<OrdersEntity[]> {
    console.log('hello');
    return this.orderRepository.find();
  }

  findOne(id: string): Promise<OrdersEntity> {
    return this.orderRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.orderRepository.delete(id);
  }
}
