import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller()
export class OrderController {
  @Get()
  findAll(): string {
    return '';
  }
  @Get()
  findOne(): string {
    return '';
  }
  @Post()
  create(): string {
    return '';
  }
  @Put()
  update(): string {
    return '';
  }
  @Delete()
  delete(): string {
    return '';
  }
}
