import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ComprasService } from './compras.service';
import { ComprasController } from './compras.controller';
import { Compra, CompraSchema } from './entities/compra.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Compra.name, schema: CompraSchema }]),
  ],
  controllers: [ComprasController],
  providers: [ComprasService],
})
export class ComprasModule {}
