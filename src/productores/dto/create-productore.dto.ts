import { IsString, IsEmail, IsArray } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProductorDto {  
  @ApiProperty({ example: 'Finca San Pedro' })
  @IsString()
  nombre: string;

  @ApiProperty({ example: '1234-5678' })
  @IsString()
  telefono: string;

  @ApiProperty({ example: 'sanpedro@correo.com' })
  @IsEmail()
  correo: string;

  @ApiProperty({ example: 'Papaya,Banano' })
  @IsArray()
  productos_cultivados: string[];
}
