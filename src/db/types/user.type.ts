export type User = {
  id: number;
  name: string;
  email: string;
};

export type UserCreateInput = Omit<User, 'id'>;
export type UserUpdateInput = Partial<UserCreateInput>;
