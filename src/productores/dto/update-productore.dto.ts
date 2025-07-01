import { PartialType } from '@nestjs/mapped-types';
import { CreateProductorDto } from './create-productore.dto';

export class UpdateProductorDto extends PartialType(CreateProductorDto) {}
