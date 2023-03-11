import { Injectable } from '@nestjs/common';
import { UserCreateInput, UserUpdateInput } from '../db/types/user.type';
import { UserMemoryDatabase } from '../db';

@Injectable()
export class UserService {
  findAll() {
    return UserMemoryDatabase.findAll();
  }

  findOne(id: number) {
    return UserMemoryDatabase.findOne(id);
  }

  create(userCreateInput: UserCreateInput) {
    return UserMemoryDatabase.create(userCreateInput);
  }

  update(id: number, userUpdateInput: UserUpdateInput) {
    return UserMemoryDatabase.update(id, userUpdateInput);
  }

  delete(id: number) {
    return UserMemoryDatabase.delete(id);
  }
}
