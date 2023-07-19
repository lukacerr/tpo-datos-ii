import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { User } from 'models/user.model';
import { UsersService } from 'services/user.service';

@Controller('user')
export class UserController {
  constructor(private readonly usersService: UsersService) {}

  @ApiTags('Punto 1')
  @Post()
  async createNew(@Body() user: User) {
    return await this.usersService.createOne(user);
  }

  @ApiTags('Punto 1')
  @Get('/:dni')
  async login(@Param('dni') dni: string) {
    return await this.usersService.findByDni(dni);
  }
}
