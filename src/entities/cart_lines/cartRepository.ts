import { CartLinesEntity } from './cart_lines.entity';
import { AbstractRepository, FindConditions } from 'typeorm';
import { OrdersEntity } from '../order/order.entity';
export default class CartRepository extends AbstractRepository<OrdersEntity> {}
