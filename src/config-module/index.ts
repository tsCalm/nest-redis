import { Module } from '@nestjs/common';
import envConfig from './env.config';
@Module({
  imports: [
    envConfig,
    //  RedisModule.forRootAsync(redisConfigAsync, false)
  ],
})
export class ConfigModule {}
