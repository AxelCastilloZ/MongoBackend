import { IsString, IsDate, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class CreateClienteDto {
  @ApiProperty({ example: 1 })
  @IsNumber()
  _id?: number;

  @ApiProperty({ example: 'Juan Pérez' })
  @IsString()
  nombre: string;

  @ApiProperty({ example: '8888-9999' })
  @IsString()
  telefono: string;

  @ApiProperty({ example: 'juan@correo.com' })
  @IsString()
  correo: string;

  @ApiProperty({ example: 'Nicoya centro' })
  @IsString()
  direccion: string;

  @ApiProperty({ example: '2024-06-20' })
  @IsDate()
  @Type(() => Date)
  fecha_registro: Date;
}
