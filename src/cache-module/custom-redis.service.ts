import { Injectable } from '@nestjs/common';
import { InjectRedis, DEFAULT_REDIS_NAMESPACE } from '@liaoliaots/nestjs-redis';
import Redis from 'ioredis';

@Injectable()
export class CustomRedis {
  constructor(@InjectRedis() private readonly _redis: Redis) {}

  async get(key: string) {
    return this._redis.get(key);
  }

  async set(key: string, value: any, expire: number = 60) {
    return this._redis.set(key, value, 'EX', expire);
  }

  async del(key: string) {
    return this._redis.del(key);
  }
}
