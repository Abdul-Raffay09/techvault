import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  findAll() {
    return this.productsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    const product = this.productsService.findOne(+id);
    if (!product) {
      return { error: 'Product not found' };
    }
    return product;
  }

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateData: Partial<CreateProductDto>) {
    const product = this.productsService.update(+id, updateData);
    if (!product) {
      return { error: 'Product not found' };
    }
    return product;
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    const success = this.productsService.delete(+id);
    if (!success) {
      return { error: 'Product not found' };
    }
    return { message: 'Product deleted successfully' };
  }
}
