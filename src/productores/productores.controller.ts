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
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';

@ApiTags('productores')
@Controller('productores')
export class ProductoresController {
  constructor(private readonly productoresService: ProductoresService) {}

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo productor' })
  @ApiResponse({ status: 201, description: 'Productor creado correctamente' })
  create(@Body() createProductorDto: CreateProductorDto) {
    return this.productoresService.create(createProductorDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos los productores' })
  @ApiResponse({ status: 200, description: 'Lista de productores' })
  findAll() {
    return this.productoresService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar un productor por ID' })
  @ApiParam({ name: 'id', description: 'ID del productor' })
  @ApiResponse({ status: 200, description: 'Productor encontrado' })
  findOne(@Param('id') id: string) {
    return this.productoresService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualizar un productor' })
  @ApiParam({ name: 'id', description: 'ID del productor' })
  @ApiResponse({ status: 200, description: 'Productor actualizado' })
  update(
    @Param('id') id: string,
    @Body() updateProductorDto: UpdateProductorDto,
  ) {
    return this.productoresService.update(id, updateProductorDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un productor' })
  @ApiParam({ name: 'id', description: 'ID del productor' })
  @ApiResponse({ status: 200, description: 'Productor eliminado' })
  remove(@Param('id') id: string) {
    return this.productoresService.remove(id);
  }
}
