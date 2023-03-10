// import { RedisModule } from '@liaoliaots/nestjs-redis';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import envConfig from './env.config';
import { typeOrmConfigAsync } from './typeorm.config';
// import { redisConfigAsync } from './cache.config';

@Module({
  imports: [
    envConfig,
    TypeOrmModule.forRootAsync(typeOrmConfigAsync),
    // RedisModule.forRootAsync(redisConfigAsync),
  ],
})
export class ConfigModule {}
