import { Injectable } from '@nestjs/common';
import { InjectRedis, DEFAULT_REDIS_NAMESPACE } from '@liaoliaots/nestjs-redis';
import Redis from 'ioredis';

@Injectable()
export class RedisString {
  constructor(@InjectRedis() private readonly _redisString: Redis) {}

  async get(key: string) {
    return this._redisString.get(key);
  }

  async set(key: string, value: any, expire: number = 60) {
    return this._redisString.set(key, value, 'EX', expire);
  }

  async del(key: string) {
    return this._redisString.del(key);
  }
}
