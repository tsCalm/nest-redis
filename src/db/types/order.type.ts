import { Menu } from './menu.type';
import { User } from './user.type';

export type Order = {
  id: number;
  user: User;
  destination: string;
  order_list: Array<Menu>;
};

export type OrderCreateInput = Omit<Order, 'id'>;
export type OrderUpdateInput = Partial<OrderCreateInput>;
