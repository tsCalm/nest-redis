import { RedisModule } from '@liaoliaots/nestjs-redis';
import { Global, Module } from '@nestjs/common';

import { redisConfigAsync } from '../config-module/cache.config';
import { RedisString } from './redis-string.service';

@Module({
  // imports: [RedisModule.forRootAsync(redisConfigAsync)],
  providers: [RedisString],
  exports: [RedisString],
})
export class CustomCacheModule {}
