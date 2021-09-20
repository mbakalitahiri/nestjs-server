import { OrdersEntity } from './../order/order.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class CartLinesEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  ordersId: number;

  @Column()
  product_id: number;

  @Column()
  name: string;

  @Column()
  category: string;

  @Column()
  description: string;

  @Column()
  price: number;

  @Column()
  quantity: number;

  @ManyToOne(() => OrdersEntity, (orders) => orders.carts)
  public orders: OrdersEntity;
}
