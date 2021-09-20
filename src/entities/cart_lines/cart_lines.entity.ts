import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { OrdersEntity } from '../order/order.entity';

@Entity()
export class CartLinesEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  order_id: number;

  @Column()
  product_id: number;

  @Column()
  quantity: number;

  @Column()
  name: string;

  @Column()
  category: string;

  @Column()
  description: string;

  @Column()
  price: number;

  @ManyToOne(() => OrdersEntity, (orders) => orders.carts)
  public orders: OrdersEntity;
}
