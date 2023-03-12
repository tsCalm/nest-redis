import { User, UserCreateInput, UserUpdateInput } from './types/user.type';
import UserList from './data/User.data';

export const UserMemoryDatabase = (() => {
  const userList: Array<User> = UserList;

  return {
    findAll: (page: number, size: number) =>
      Promise.resolve(userList.slice((page - 1) * size, page * size)),
    findOne: async (id: number) => {
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve(1000);
        }, 1000),
      );
      return Promise.resolve(userList.find((user) => user.id === id));
    },
    create: (user: UserCreateInput) => {
      const id = (userList[userList.length]?.id || 0) + 1;
      return Promise.resolve({
        id,
        ...user,
      });
    },
    update: (id: number, userUpdateInput: UserUpdateInput) => {
      const findedObj = userList.find((user) => user.id === id);
      const updatedObj = Object.assign(findedObj, userUpdateInput);
      return Promise.resolve(updatedObj);
    },
    delete: (id: number) => {
      const idx = userList.findIndex((user) => user.id === id);
      userList.splice(idx, 1);
      return Promise.resolve(id);
    },
  };
})();
