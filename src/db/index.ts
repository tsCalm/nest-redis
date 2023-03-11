import { User, UserCreateInput, UserUpdateInput } from './types/user.type';
import UserList from './data/User.data';
import { Menu, MenuCreateInput, MenuUpdateInput } from './types/Menu.type';
import MenuList from './data/Menu.data';
import OrderList from './data/Order.data';
import { Order, OrderCreateInput, OrderUpdateInput } from './types/Order.type';

export const UserMemoryDatabase = (() => {
  const userList: Array<User> = UserList;

  return {
    findAll: (page: number, size: number) =>
      Promise.resolve(userList.slice((page - 1) * size, page * size)),
    findOne: (id: number) =>
      Promise.resolve(userList.find((user) => user.id === id)),
    create: (user: UserCreateInput) => {
      const id = (userList[userList.length]?.id || 0) + 1;
      return Promise.resolve({
        id,
        ...user,
      });
    },
    update: (id: number, userUpdateInput: UserUpdateInput) => {
      const findedUser = userList.find((user) => user.id === id);
      Object.assign(findedUser, userUpdateInput);
      return Promise.resolve(true);
    },
    delete: (id: number) => {
      const idx = userList.findIndex((user) => user.id === id);
      userList.splice(idx, 1);
      return Promise.resolve(true);
    },
  };
})();

export const MenuMemoryDatabase = (() => {
  const menuList: Array<Menu> = MenuList;

  return {
    findAll: (page: number, size: number) =>
      Promise.resolve(menuList.slice((page - 1) * size, page * size)),
    findOne: (id: number) =>
      Promise.resolve(menuList.find((menu) => menu.id === id)),
    create: (menu: MenuCreateInput) => {
      const id = (menuList[menuList.length]?.id || 0) + 1;
      return Promise.resolve({
        id,
        ...menu,
      });
    },
    update: (id: number, menuUpdateInput: MenuUpdateInput) => {
      const findedMenu = menuList.find((menu) => menu.id === id);
      Object.assign(findedMenu, menuUpdateInput);
      return Promise.resolve(true);
    },
    delete: (id: number) => {
      const idx = menuList.findIndex((menu) => menu.id === id);
      menuList.splice(idx, 1);
      return Promise.resolve(true);
    },
  };
})();

export const OrderMemoryDatabase = (() => {
  const orderList: Array<Order> = OrderList;

  return {
    findAll: (page: number, size: number) =>
      Promise.resolve(orderList.slice((page - 1) * size, page * size)),
    findOne: (id: number) =>
      Promise.resolve(orderList.find((order) => order.id === id)),
    create: (order: OrderCreateInput) => {
      const id = (orderList[orderList.length]?.id || 0) + 1;
      return Promise.resolve({
        id,
        ...order,
      });
    },
    update: (id: number, orderUpdateInput: OrderUpdateInput) => {
      const findedOrder = orderList.find((order) => order.id === id);
      Object.assign(findedOrder, orderUpdateInput);
      return Promise.resolve(true);
    },
    delete: (id: number) => {
      const idx = orderList.findIndex((order) => order.id === id);
      orderList.splice(idx, 1);
      return Promise.resolve(true);
    },
  };
})();
