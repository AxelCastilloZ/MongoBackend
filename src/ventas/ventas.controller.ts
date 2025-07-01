import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  Put,
  Delete,
} from '@nestjs/common';
import { VentasService } from './ventas.service';
import { CreateVentaDto } from './dto/create-venta.dto';
import { UpdateVentaDto } from './dto/update-venta.dto';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiQuery,
} from '@nestjs/swagger';

@ApiTags('ventas')
@Controller('ventas')
export class VentasController {
  constructor(private readonly ventasService: VentasService) {}

  @Post()
  @ApiOperation({ summary: 'Registrar una nueva venta' })
  @ApiResponse({ status: 201, description: 'Venta registrada correctamente' })
  create(@Body() dto: CreateVentaDto) {
    return this.ventasService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todas las ventas' })
  @ApiResponse({ status: 200, description: 'Lista de ventas' })
  findAll() {
    return this.ventasService.findAll();
  }

  @Get('por-fecha')
  @ApiOperation({ summary: 'Consultar ventas por rango de fechas' })
  @ApiQuery({ name: 'desde', description: 'Fecha de inicio (YYYY-MM-DD)' })
  @ApiQuery({ name: 'hasta', description: 'Fecha de fin (YYYY-MM-DD)' })
  @ApiResponse({ status: 200, description: 'Ventas dentro del rango indicado' })
  porFecha(@Query('desde') desde: string, @Query('hasta') hasta: string) {
    return this.ventasService.porFecha(new Date(desde), new Date(hasta));
  }

  @Get('por-productor/:id')
  @ApiOperation({ summary: 'Consultar ventas asociadas a un productor' })
  @ApiParam({ name: 'id', description: 'ID del productor' })
  @ApiResponse({
    status: 200,
    description: 'Ventas relacionadas con el productor',
  })
  porProductor(@Param('id') id: string) {
    return this.ventasService.porProductor(id);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener una venta por ID' })
  @ApiParam({ name: 'id', description: 'ID de la venta' })
  @ApiResponse({ status: 200, description: 'Venta encontrada' })
  findOne(@Param('id') id: string) {
    return this.ventasService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualizar una venta por ID' })
  @ApiParam({ name: 'id', description: 'ID de la venta' })
  @ApiResponse({ status: 200, description: 'Venta actualizada' })
  update(@Param('id') id: string, @Body() dto: UpdateVentaDto) {
    return this.ventasService.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar una venta por ID' })
  @ApiParam({ name: 'id', description: 'ID de la venta' })
  @ApiResponse({ status: 200, description: 'Venta eliminada' })
  remove(@Param('id') id: string) {
    return this.ventasService.remove(id);
  }
}
