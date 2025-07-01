import {
  IsString,
  IsDate,
  IsNumber,
  IsArray,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

class ClienteDto {
  @IsString()
  nombre: string;

  @IsString()
  telefono: string;
}

class ProductoVendidoDto {
  @IsString()
  producto_id: string;

  @IsString()
  nombre: string;

  @IsNumber()
  cantidad: number;

  @IsNumber()
  precio_unitario: number;
}

export class CreateVentaDto {
  @IsDate()
  @Type(() => Date)
  fecha: Date;

  @ValidateNested()
  @Type(() => ClienteDto)
  cliente: ClienteDto;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ProductoVendidoDto)
  productos_vendidos: ProductoVendidoDto[];

  @IsNumber()
  total_venta: number;
}
