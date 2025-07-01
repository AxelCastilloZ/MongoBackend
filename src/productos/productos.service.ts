import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Producto, ProductoDocument } from './entities/producto.schema';

@Injectable()
export class ProductosService {
  constructor(
    @InjectModel(Producto.name) private model: Model<ProductoDocument>,
  ) {}

  create(data: Partial<Producto>) {
    return new this.model(data).save();
  }

  findAll() {
    return this.model.find().exec();
  }

  findOne(id: string) {
    return this.model.findById(id).exec();
  }

  update(id: string, data: Partial<Producto>) {
    return this.model.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  remove(id: string) {
    return this.model.findByIdAndDelete(id).exec();
  }

  stockBajo(min: number) {
    return this.model.find({ stock: { $lt: min } }).exec();
  }
}
