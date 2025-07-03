import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { VentasService } from './ventas.service';
import { VentasController } from './ventas.controller';
import { Venta, VentaSchema } from './entities/venta.schema';
import { Producto, ProductoSchema } from '../productos/entities/producto.schema'; // Asegúrate que la ruta sea correcta

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Venta.name, schema: VentaSchema },
      { name: Producto.name, schema: ProductoSchema }, // ← ¡Agregado!
    ]),
  ],
  controllers: [VentasController],
  providers: [VentasService],
})
export class VentasModule {}
