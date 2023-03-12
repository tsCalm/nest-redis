import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { CustomCacheModule } from './cache-module/cache-module';
import { ConfigModule } from './config-module';
import { UserModule } from './user-module/user.module';

@Module({
  imports: [ConfigModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
