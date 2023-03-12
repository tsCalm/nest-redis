import { CacheModule, Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [
    CacheModule.register({
      // isGlobal: true,
      // ttl: 5, // 캐싱 만료 시간
      // max: 10, // 캐싱 데이터 수
    }),
  ],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
