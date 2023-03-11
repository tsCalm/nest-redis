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
import { MenuCreateInput, MenuUpdateInput } from 'src/db/types/Menu.type';
import { UserCreateInput } from 'src/db/types/user.type';
import { MenuService } from './menu.service';

@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}
  @Get()
  findAll(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Query('size', new DefaultValuePipe(10), ParseIntPipe) size: number,
  ) {
    return this.menuService.findAll(page, size);
  }
  @Get('/:id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.menuService.findOne(id);
  }
  @Post('/create')
  create(@Body() menuCreateInput: MenuCreateInput) {
    return this.menuService.create(menuCreateInput);
  }
  @Put('/put/:id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() menuUpdateInput: MenuUpdateInput,
  ) {
    return this.menuService.update(id, menuUpdateInput);
  }
  @Delete('/delete/:id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.menuService.delete(id);
  }
}
