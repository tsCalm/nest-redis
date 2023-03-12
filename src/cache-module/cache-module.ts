import { RedisModule } from '@liaoliaots/nestjs-redis';
import { Module } from '@nestjs/common';

import { redisConfigAsync } from '../config-module/cache.config';
import { RedisString } from './redis-string.service';

@Module({
  imports: [RedisModule.forRootAsync(redisConfigAsync, false)],
  providers: [RedisString],
  exports: [RedisString],
})
export class CustomCacheModule {}
