/* eslint-disable prettier/prettier */
import {
  IsString,
  IsDate,
  IsNumber,
  IsArray,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

class ClienteDto {
  // @ApiProperty({ example: 'cliente01' })
  // @IsString()
  // _id: string;

  @ApiProperty({ example: 'Gloria Castillo' })
  @IsString()
  nombre: string;

  @ApiProperty({ example: '1234-5678' })
  @IsString()
  telefono: string;
}

class ProductoVendidoDto {
  @ApiProperty({ example: 'v001' })
  @IsString()
  producto_id: string;

  @ApiProperty({ example: 'Aguacate' })
  @IsString()
  nombre: string;

  @ApiProperty({ example: '9' })
  @IsNumber()
  cantidad: number;

  @ApiProperty({ example: '900' })
  @IsNumber()
  precio_unitario: number;
}

export class CreateVentaDto {
  @IsString()
  _id: string;

  @ApiProperty({ example: '2025-06-13' })
  @IsDate()
  @Type(() => Date)
  fecha: Date;

  @ApiProperty({
    type: () => ClienteDto,
    description: 'Datos del cliente que realiza la compra',
  })
  @ValidateNested()
  @Type(() => ClienteDto)
  cliente: ClienteDto;

  @ApiProperty({
    type: [ProductoVendidoDto],
    description: 'Lista de productos vendidos en esta venta',
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ProductoVendidoDto)
  productos_vendidos: ProductoVendidoDto[];

  @ApiProperty({ example: '5' })
  @IsNumber()
  total_venta: number;
}
