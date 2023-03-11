import { Injectable } from '@nestjs/common';
import { OrderCreateInput, OrderUpdateInput } from '../db/types/order.type';
import { OrderMemoryDatabase } from '../db';

@Injectable()
export class OrderService {
  findAll() {
    return OrderMemoryDatabase.findAll();
  }

  findOne(id: number) {
    return OrderMemoryDatabase.findOne(id);
  }

  create(orderCreateInput: OrderCreateInput) {
    return OrderMemoryDatabase.create(orderCreateInput);
  }

  update(id: number, orderUpdateInput: OrderUpdateInput) {
    return OrderMemoryDatabase.update(id, orderUpdateInput);
  }

  delete(id: number) {
    return OrderMemoryDatabase.delete(id);
  }
}
