import { Module } from '@nestjs/common';
import { MenuController } from './menu.controller';

@Module({
  imports: [],
  controllers: [MenuController],
  providers: [],
})
export class MenuModule {}
