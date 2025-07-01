import { IsString, IsEmail, IsArray } from 'class-validator';

export class CreateProductorDto {
  @IsString()
  nombre: string;

  @IsString()
  telefono: string;

  @IsEmail()
  correo: string;

  @IsArray()
  productos_cultivados: string[];
}
