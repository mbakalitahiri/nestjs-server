import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CartLines {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  order_id: number;

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
}
