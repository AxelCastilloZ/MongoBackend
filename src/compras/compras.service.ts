import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Compra, CompraDocument } from './entities/compra.schema';
import { CreateCompraDto } from './dto/create-compra.dto';

@Injectable()
export class ComprasService {
  constructor(
    @InjectModel(Compra.name)
    private model: Model<CompraDocument>,
  ) {}

  create(dto: CreateCompraDto) {
    const nueva = new this.model(dto);
    return nueva.save();
  }

  findAll() {
    return this.model.find().exec();
  }
}
