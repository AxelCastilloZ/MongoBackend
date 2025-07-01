import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductoresModule } from './productores/productores.module';
import { ProductosModule } from './productos/productos.module';
import { VentasModule } from './ventas/ventas.module';
import { CategoriasModule } from './categorias/categorias.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/feria_nicoya'),
    ProductoresModule,
    ProductosModule,
    VentasModule,
    CategoriasModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
