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
import { OrderCreateInput, OrderUpdateInput } from '../db/types/order.type';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}
  @Get()
  findAll(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Query('size', new DefaultValuePipe(10), ParseIntPipe) size: number,
  ) {
    return this.orderService.findAll(page, size);
  }
  @Get('/:id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.orderService.findOne(id);
  }
  @Post('/create')
  create(@Body() orderCreateInput: OrderCreateInput) {
    return this.orderService.create(orderCreateInput);
  }
  @Put('/put/:id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() orderUpdateInput: OrderUpdateInput,
  ) {
    return this.orderService.update(id, orderUpdateInput);
  }
  @Delete('/delete/:id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.orderService.delete(id);
  }
}
