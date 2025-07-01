import { IsString, IsNumber } from 'class-validator';

export class CreateCompraDto {
  @IsString()
  _id: string;

  @IsString()
  producto: string;

  @IsNumber()
  cantidad: number;
}
