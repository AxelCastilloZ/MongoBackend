import { Controller, Post, Body, Get } from '@nestjs/common';
import { ComprasService } from './compras.service';
import { CreateCompraDto } from './dto/create-compra.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('compras') // Agrupa este controlador en Swagger
@Controller('compras')
export class ComprasController {
  constructor(private readonly comprasService: ComprasService) {}

  @Post()
  @ApiOperation({ summary: 'Registrar una nueva compra' })
  @ApiResponse({
    status: 201,
    description: 'Compra registrada correctamente',
  })
  create(@Body() dto: CreateCompraDto) {
    return this.comprasService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todas las compras' })
  @ApiResponse({
    status: 200,
    description: 'Listado de todas las compras registradas',
  })
  findAll() {
    return this.comprasService.findAll();
  }
}
