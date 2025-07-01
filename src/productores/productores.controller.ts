import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { ProductoresService } from './productores.service';
import { CreateProductorDto } from './dto/create-productore.dto';
import { UpdateProductorDto } from './dto/update-productore.dto';

@Controller('productores')
export class ProductoresController {
  constructor(private readonly productoresService: ProductoresService) {}

  @Post()
  create(@Body() createProductorDto: CreateProductorDto) {
    return this.productoresService.create(createProductorDto);
  }

  @Get()
  findAll() {
    return this.productoresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productoresService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateProductorDto: UpdateProductorDto,
  ) {
    return this.productoresService.update(id, updateProductorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productoresService.remove(id);
  }
}
