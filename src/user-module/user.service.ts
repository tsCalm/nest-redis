import { Injectable } from '@nestjs/common';
import { UserCreateInput, UserUpdateInput } from '../db/types/user.type';
import { UserMemoryDatabase } from '../db';
import { CustomRedis } from '../cache-module/custom-redis.service';

@Injectable()
export class UserService {
  constructor(private readonly _redis: CustomRedis) {}
  findAll(page: number, size: number) {
    return UserMemoryDatabase.findAll(page, size);
  }

  async findOne(id: number) {
    const result = await UserMemoryDatabase.findOne(id);
    if (result) this._redis.set(`user:${id}`, JSON.stringify(result));
    return result;
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
