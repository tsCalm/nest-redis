import { CacheModule, Module } from '@nestjs/common';
import { CustomCacheModule } from '../cache-module/cache-module';
import { RedisCacheInterceptor } from '../interceptors/http-interceptor';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [CustomCacheModule],
  controllers: [UserController],
  providers: [UserService, RedisCacheInterceptor],
  exports: [UserService],
})
export class UserModule {}
