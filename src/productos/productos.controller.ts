import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  Query,
} from '@nestjs/common';
import { ProductosService } from './productos.service';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiQuery,
} from '@nestjs/swagger';

@ApiTags('productos')
@Controller('productos')
export class ProductosController {
  constructor(private readonly productosService: ProductosService) {}

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo producto' })
  @ApiResponse({ status: 201, description: 'Producto creado correctamente' })
  create(@Body() dto: CreateProductoDto) {
    return this.productosService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos los productos' })
  @ApiResponse({ status: 200, description: 'Lista de productos' })
  findAll() {
    return this.productosService.findAll();
  }

  @Get('stock-bajo')
  @ApiOperation({ summary: 'Obtener productos con stock bajo' })
  @ApiQuery({
    name: 'min',
    description: 'Stock mínimo para filtrar',
    example: 20,
  })
  @ApiResponse({
    status: 200,
    description: 'Productos con stock inferior al mínimo',
  })
  stockBajo(@Query('min') min: string) {
    const minimo = parseInt(min);
    return this.productosService.stockBajo(minimo);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un producto por ID' })
  @ApiParam({ name: 'id', description: 'ID del producto' })
  @ApiResponse({ status: 200, description: 'Producto encontrado' })
  findOne(@Param('id') id: string) {
    return this.productosService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualizar un producto por ID' })
  @ApiParam({ name: 'id', description: 'ID del producto' })
  @ApiResponse({ status: 200, description: 'Producto actualizado' })
  update(@Param('id') id: string, @Body() dto: UpdateProductoDto) {
    return this.productosService.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un producto por ID' })
  @ApiParam({ name: 'id', description: 'ID del producto' })
  @ApiResponse({ status: 200, description: 'Producto eliminado' })
  remove(@Param('id') id: string) {
    return this.productosService.remove(id);
  }

  @Get('por-productor/:id')
  @ApiOperation({ summary: 'Obtener productos por productor' })
  @ApiParam({ name: 'id', description: 'ID del productor' })
  @ApiResponse({ status: 200, description: 'Lista de productos del productor' })
  findByProductor(@Param('id') id: string) {
    return this.productosService.findByProductor(id);
  }

  @Get('por-categoria/:id')
  @ApiOperation({ summary: 'Obtener productos por categoría' })
  @ApiParam({ name: 'id', description: 'ID de la categoría' })
  @ApiResponse({
    status: 200,
    description: 'Lista de productos de la categoría',
  })
  findByCategoria(@Param('id') id: string) {
    return this.productosService.findByCategoria(id);
  }
}
