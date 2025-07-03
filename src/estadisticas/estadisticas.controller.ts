import { Controller, Get, Param, Query } from '@nestjs/common';
import { EstadisticasService } from './estadisticas.service';
import { BadRequestException } from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiQuery,
} from '@nestjs/swagger';

@ApiTags('estadisticas')
@Controller('estadisticas')
export class EstadisticasController {
  constructor(private readonly estadisticasService: EstadisticasService) {}

  @Get('productos-mas-vendidos')
  @ApiOperation({ summary: 'Obtener los productos más vendidos' })
  @ApiResponse({ status: 200, description: 'Lista de productos más vendidos' })
  productosMasVendidos() {
    return this.estadisticasService.productosMasVendidos();
  }

  @Get('ventas-por-productor/:id')
  @ApiOperation({ summary: 'Ventas totales por productor' })
  @ApiParam({ name: 'id', description: 'ID del productor' })
  @ApiResponse({ status: 200, description: 'Ventas agrupadas por productor' })
  ventasPorProductor(@Param('id') id: string) {
    return this.estadisticasService.ventasPorProductor(id);
  }

  @Get('ventas-por-fecha')
  @ApiOperation({ summary: 'Consultar ventas por rango de fechas' })
  @ApiQuery({ name: 'desde', description: 'Fecha de inicio (YYYY-MM-DD)' })
  @ApiQuery({ name: 'hasta', description: 'Fecha de fin (YYYY-MM-DD)' })
  @ApiResponse({ status: 200, description: 'Ventas dentro del rango' })
  ventasEnRango(@Query('desde') desde: string, @Query('hasta') hasta: string) {
    return this.estadisticasService.ventasEnRango(
      new Date(desde),
      new Date(hasta),
    );
  }
}
