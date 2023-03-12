import {
  Body,
  CacheInterceptor,
  CacheKey,
  CacheTTL,
  Controller,
  DefaultValuePipe,
  Delete,
  Get,
  Header,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
  SetMetadata,
  UseInterceptors,
} from '@nestjs/common';
import { RedisCacheInterceptor } from '../interceptors/http-interceptor';
import { UserCreateInput, UserUpdateInput } from '../db/types/user.type';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  static redisPrefix = 'user';
  constructor(private readonly userService: UserService) {}

  @Get()
  findAll(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Query('size', new DefaultValuePipe(10), ParseIntPipe) size: number,
  ) {
    return this.userService.findAll(page, size);
  }

  @Get('/:id')
  @UseInterceptors(RedisCacheInterceptor)
  // @Header('Cache-Control', 'max-age=60')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const startTime = new Date().getTime();
    console.log('진입');

    const findedUser = await this.userService.findOne(id);
    const endTime = new Date().getTime();
    console.log('db - 걸린시간 : ', (endTime - startTime) / 1000 + 'S');
    return findedUser;
  }

  @Post('/create')
  create(@Body() userCreateInput: UserCreateInput) {
    return this.userService.create(userCreateInput);
  }
  @Put('/put/:id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() userUpdateInput: UserUpdateInput,
  ) {
    return this.userService.update(id, userUpdateInput);
  }
  @Delete('/delete/:id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.userService.delete(id);
  }
}
