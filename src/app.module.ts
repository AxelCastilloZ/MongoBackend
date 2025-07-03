import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductoresModule } from './productores/productores.module';
import { ProductosModule } from './productos/productos.module';
import { VentasModule } from './ventas/ventas.module';
import { CategoriasModule } from './categorias/categorias.module';
import { ComprasModule } from './compras/compras.module';
import { EstadisticasModule } from './estadisticas/estadisticas.module';
import { ClientesModule } from './clientes/clientes.module';

@Module({
  imports: [
    // MongooseModule.forRoot('mongodb://localhost:27017/feriaAgricultor'),

    // MongooseModule.forRoot(
    //   'mongodb://root:root1234@localhost:27017/feriaAgricultor?authSource=feriaAgricultor',
    // ),

    // MongooseModule.forRoot(
    //   'mongodb://productor1:prod123@localhost:27017/feriaAgricultor?authSource=feriaAgricultor',
    // ),

    MongooseModule.forRoot(
      'mongodb://cliente1:cli123@localhost:27017/feriaAgricultor?authSource=feriaAgricultor',
    ),

    ProductoresModule,
    ProductosModule,
    VentasModule,
    CategoriasModule,
    ComprasModule,
    EstadisticasModule,
    ClientesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
