import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { CartLinesEntity } from '../cart_lines/cart_lines.entity';

@Entity()
export class OrdersEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  lastName: string;

  @Column()
  address: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column()
  zip: string;

  @Column()
  country: string;

  @Column({ default: false })
  shipped: boolean;

  @Column()
  itemCount: number;

  @Column()
  cartPrice: number;

  @Column()
  datetime: string;

  @OneToMany(() => CartLinesEntity, (cartLines) => cartLines.orders)
  public carts: CartLinesEntity[];
}
