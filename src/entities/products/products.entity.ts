import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Products {
  @PrimaryGeneratedColumn()
  productCode: number;

  @Column()
  productName: string;

  @Column()
  category: string;

  @Column()
  productScale: string;

  @Column()
  productVendor: string;

  @Column()
  productDescription: string;

  @Column()
  quantityInStock: number;

  @Column()
  buyPrice: number;

  @Column()
  MSRP: number;
}
