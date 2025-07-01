import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductoresService } from './productores.service';
import { ProductoresController } from './productores.controller';
import { Productor, ProductorSchema } from './entities/productor.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Productor.name, schema: ProductorSchema },
    ]),
  ],
  controllers: [ProductoresController],
  providers: [ProductoresService],
})
export class ProductoresModule {}
