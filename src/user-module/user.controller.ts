import {
  Body,
  Controller,
  DefaultValuePipe,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { UserCreateInput, UserUpdateInput } from '../db/types/user.type';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  findAll(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Query('size', new DefaultValuePipe(10), ParseIntPipe) size: number,
  ) {
    return this.userService.findAll();
  }
  @Get('/:id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.userService.findOne(id);
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
