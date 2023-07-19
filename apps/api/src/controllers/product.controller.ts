import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Product } from 'models/product.model';
import { ProductsService } from 'services/product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productsService: ProductsService) {}

  @ApiTags('Punto 9')
  @Post()
  async createNew(@Body() product: Product) {
    return await this.productsService.create(product);
  }

  @ApiTags('Punto 9')
  @Get()
  async getAll() {
    return await this.productsService.findAll();
  }

  @ApiTags('Punto 9')
  @Get('/:id')
  async getOne(@Param('id') id: string) {
    return await this.productsService.findById(id);
  }

  @ApiTags('Punto 10')
  @Put('/:id')
  async edit(@Param('id') id: string, @Body() updated: Product) {
    return await this.productsService.updateOne(id, updated);
  }
}
