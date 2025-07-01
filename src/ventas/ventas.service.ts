import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Venta, VentaDocument } from './entities/venta.schema';

@Injectable()
export class VentasService {
  constructor(
    @InjectModel(Venta.name) private model: Model<VentaDocument>,
  ) {}

  create(data: Partial<Venta>) {
    return new this.model(data).save();
  }

  findAll() {
    return this.model.find().exec();
  }

  findOne(id: string) {
    return this.model.findById(id).exec();
  }

  update(id: string, data: Partial<Venta>) {
    return this.model.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  remove(id: string) {
    return this.model.findByIdAndDelete(id).exec();
  }

  porFecha(desde: Date, hasta: Date) {
    return this.model.find({
      fecha: { $gte: desde, $lte: hasta },
    }).exec();
  }

  porProductor(productorId: string) {
    return this.model.find({
      'productos_vendidos.productor_id': productorId,
    }).exec();
  }
}
