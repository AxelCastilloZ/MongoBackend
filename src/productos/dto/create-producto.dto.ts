import { IsString, IsNumber, IsDate, IsNotEmpty } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProductoDto {
  @IsString()
  _id: string;

  @ApiProperty({ example: 'Tomate' })
  @IsString()
  nombre: string;

  @ApiProperty({ example: 'cat01' })
  @IsString()
  categoria_id: string;

  @ApiProperty({ example: 'prod001' })
  @IsString()
  productor_id: string;

  @ApiProperty({ example: '100' })
  @IsNumber()
  precio_unitario: number;

  @ApiProperty({ example: '80' })
  @IsNumber()
  stock: number;

  @ApiProperty({ example: 'Kilogramos' })
  @IsString()
  unidad_medida: string;

  @ApiProperty({ example: '2025-06-09' })
  @IsDate()
  @Type(() => Date)
  fecha_cosecha: Date;
}
