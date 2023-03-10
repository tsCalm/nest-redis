import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomCacheModule } from './cache-module/cache-module';
import { ConfigModule } from './config-module';

@Module({
  imports: [CustomCacheModule, ConfigModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
