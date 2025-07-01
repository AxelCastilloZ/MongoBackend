import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCategoriaDto {
  @IsString()
  _id: string;

  @ApiProperty({ example: 'frutas' })
  @IsString()
  nombre: string;
}
