import { Controller, Get, Post, Put, Delete, Body,Param } from '@nestjs/common';
import { UsersService } from '../../services/users/users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get()
  index() {
    return this.usersService.findAll();
  }

  @Get(':id')
  show(@Param('id') id: number) {
    return this.usersService.show(id);
  }

  @Post()
  create(@Body() body: any) {
    return this.usersService.create(body);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() body: any) {
    return this.usersService.update(id, body);
  }

  @Delete(':id')
  destroy(@Param('id') id: number) {
    return this.usersService.delete(id);
  }
}
