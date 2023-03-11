import { CacheModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomCacheModule } from './cache-module/cache-module';
import { ConfigModule } from './config-module';
import { OrderModule } from './order-module/order.module';
import { MenuModule } from './menu-module/menu.module';
import { UserModule } from './user-module/user.module';

@Module({
  imports: [
    CustomCacheModule,
    ConfigModule,
    UserModule,
    MenuModule,
    OrderModule,
    CacheModule.register({ isGlobal: true }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
