import { User, UserCreateInput, UserUpdateInput } from './types/user.type';
import UserList from './data/User.data';

export const MemoryDatabase = (() => {
  const users = UserList;

  return {
    findAll: () => Promise.resolve(users),
    findOne: (id: number) =>
      Promise.resolve(users.find((user) => user.id === id)),
    create: (user: UserCreateInput) => {
      const id = (users[users.length]?.id || 0) + 1;
      return Promise.resolve({
        id,
        ...user,
      });
    },
    update: (id: number, userUpdateInput: UserUpdateInput) => {
      const findedUser = users.find((user) => user.id === id);
      Object.assign(findedUser, userUpdateInput);
      return Promise.resolve(true);
    },
    delete: (id: number) => {
      const idx = users.findIndex((user) => user.id === id);
      users.splice(idx, 1);
      return Promise.resolve(true);
    },
  };
})();
