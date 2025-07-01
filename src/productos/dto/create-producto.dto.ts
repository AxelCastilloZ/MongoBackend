import { IsString, IsNumber, IsDate, IsNotEmpty } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateProductoDto {
  @IsString()
  nombre: string;

  @IsString()
  categoria_id: string;

  @IsString()
  productor_id: string;

  @IsNumber()
  precio_unitario: number;

  @IsNumber()
  stock: number;

  @IsString()
  unidad_medida: string;

  @IsDate()
  @Type(() => Date) 
  fecha_cosecha: Date;
}
