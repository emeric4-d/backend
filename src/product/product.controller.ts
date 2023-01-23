import { User } from './product.entity';
import { ProductService } from './product.service';
import { Controller, Get } from '@nestjs/common';
import { Body, Post } from '@nestjs/common/decorators';

@Controller('product')
export class ProductController {
  constructor(private readonly service: ProductService) {}

  @Get('/user')
  getUSer(): any {
    return this.service.findAll();
  }
  @Post('/faire')
  CreateUser(@Body() user: User) {
    return this.service.createUser(user);
  }
}
