import { IsString, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCompraDto {
  @ApiProperty({ example: 'compra01' })
  @IsString()
  _id: string;

  @ApiProperty({ example: 'Manzana' })
  @IsString()
  producto: string;

  @ApiProperty({ example: '7' })
  @IsNumber()
  cantidad: number;
}
