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

@Controller('ventas')
export class VentasController {
  constructor(private readonly ventasService: VentasService) {}

  @Post()
  create(@Body() dto: CreateVentaDto) {
    return this.ventasService.create(dto);
  }

  @Get()
  findAll() {
    return this.ventasService.findAll();
  }

  @Get('por-fecha')
  porFecha(@Query('desde') desde: string, @Query('hasta') hasta: string) {
    return this.ventasService.porFecha(new Date(desde), new Date(hasta));
  }

  @Get('por-productor/:id')
  porProductor(@Param('id') id: string) {
    return this.ventasService.porProductor(id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ventasService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateVentaDto) {
    return this.ventasService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ventasService.remove(id);
  }
}
