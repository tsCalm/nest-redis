import { RedisModule } from '@liaoliaots/nestjs-redis';
import { Global, Module } from '@nestjs/common';

import { redisConfigAsync } from '../config-module/cache.config';

@Module({
  imports: [RedisModule.forRootAsync(redisConfigAsync)],
})
export class CustomCacheModule {}
