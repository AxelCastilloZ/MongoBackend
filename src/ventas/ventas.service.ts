import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Venta, VentaDocument } from './entities/venta.schema';
import {
  Producto,
  ProductoDocument,
} from '../productos/entities/producto.schema';

@Injectable()
export class VentasService {
  constructor(
    @InjectModel(Venta.name) private model: Model<VentaDocument>,
    @InjectModel(Producto.name) private productoModel: Model<ProductoDocument>,
  ) {}

  async create(data: Partial<Venta>) {
    if (!data.productos_vendidos || !Array.isArray(data.productos_vendidos)) {
      throw new Error('La venta debe incluir productos vendidos');
    }

    for (const item of data.productos_vendidos) {
      const producto = await this.productoModel.findById(item.producto_id);

      if (!producto) {
        throw new Error(`Producto con ID ${item.producto_id} no encontrado`);
      }

      if (producto.stock < item.cantidad) {
        throw new Error(
          `Stock insuficiente para el producto "${producto.nombre}"`,
        );
      }
    }

    const venta = new this.model(data);
    await venta.save();

    for (const item of data.productos_vendidos) {
      await this.productoModel.updateOne(
        { _id: item.producto_id },
        { $inc: { stock: -item.cantidad } },
      );
    }

    return venta;
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
    return this.model
      .find({
        fecha: { $gte: desde, $lte: hasta },
      })
      .exec();
  }

  porProductor(productorId: string) {
    return this.model
      .aggregate([
        { $unwind: '$productos_vendidos' },

        {
          $lookup: {
            from: 'productos',
            localField: 'productos_vendidos.producto_id',
            foreignField: '_id',
            as: 'producto_detalle',
          },
        },

        { $unwind: '$producto_detalle' },

        {
          $match: {
            'producto_detalle.productor_id': productorId,
          },
        },

        {
          $group: {
            _id: '$_id',
            fecha: { $first: '$fecha' },
            cliente: { $first: '$cliente' },
            productos_vendidos: { $push: '$productos_vendidos' },
          },
        },
      ])
      .exec();
  }

 
}
