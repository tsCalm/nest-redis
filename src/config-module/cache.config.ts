import {
  RedisModuleAsyncOptions,
  RedisModuleOptions,
} from '@liaoliaots/nestjs-redis';
import { ConfigService } from '@nestjs/config';

class RedisConfig {
  static getConfig(configService: ConfigService): RedisModuleOptions {
    return {
      config: {
        host: configService.get<string>('REDIS_HOSTNAME'),
        port: configService.get<number>('REDIS_PORT'),
        password: configService.get<string>('REDIS_PASSWORD'),
      },
    };
  }
}

export const redisConfigAsync: RedisModuleAsyncOptions = {
  useFactory: async (configService: ConfigService) =>
    RedisConfig.getConfig(configService),
  inject: [ConfigService],
};
