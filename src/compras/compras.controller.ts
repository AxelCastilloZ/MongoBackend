import { Controller, Post, Body, Get } from '@nestjs/common';
import { ComprasService } from './compras.service';
import { CreateCompraDto } from './dto/create-compra.dto';

@Controller('compras')
export class ComprasController {
  constructor(private readonly comprasService: ComprasService) {}

  @Post()
  create(@Body() dto: CreateCompraDto) {
    return this.comprasService.create(dto);
  }

  @Get()
  findAll() {
    return this.comprasService.findAll();
  }
}
