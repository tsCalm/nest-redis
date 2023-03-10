import { Menu } from './menu.type';
import { User } from './user.type';

export type Order = {
  id: number;
  user: User;
  destination: string;
  order_list: Array<Menu>;
};
