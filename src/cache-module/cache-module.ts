import { RedisModule } from '@liaoliaots/nestjs-redis';
import { Module } from '@nestjs/common';

import { redisConfigAsync } from '../config-module/cache.config';
import { CustomRedis } from './custom-redis.service';

@Module({
  imports: [RedisModule.forRootAsync(redisConfigAsync, false)],
  providers: [CustomRedis],
  exports: [CustomRedis],
})
export class CustomCacheModule {}
