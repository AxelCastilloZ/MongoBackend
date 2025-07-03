import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Venta, VentaDocument } from '../ventas/entities/venta.schema';
import {
  Producto,
  ProductoDocument,
} from '../productos/entities/producto.schema';

@Injectable()
export class EstadisticasService {
  constructor(
    @InjectModel(Venta.name) private ventaModel: Model<VentaDocument>,
    @InjectModel(Producto.name) private productoModel: Model<ProductoDocument>,
  ) {}

  async productosMasVendidos() {
    return this.ventaModel.aggregate([
      { $unwind: '$productos_vendidos' },
      {
        $group: {
          _id: '$productos_vendidos.nombre',
          totalVendidos: { $sum: '$productos_vendidos.cantidad' },
        },
      },
      { $sort: { totalVendidos: -1 } },
      { $limit: 3 },
    ]);
  }

  async ventasPorProductor(productorId: string) {
    return this.ventaModel.aggregate([
      { $unwind: '$productos_vendidos' },
      {
        $lookup: {
          from: 'productos',
          localField: 'productos_vendidos.producto_id',
          foreignField: '_id',
          as: 'producto_info',
        },
      },
      { $unwind: '$producto_info' },
      { $match: { 'producto_info.productor_id': productorId } },
      {
        $group: {
          _id: productorId,
          totalVendidos: { $sum: '$productos_vendidos.cantidad' },
        },
      },
    ]);
  }

  async ventasEnRango(desde: Date, hasta: Date) {
    return this.ventaModel
      .find({
        fecha: { $gte: desde, $lte: hasta },
      })
      .exec();
  }
}
