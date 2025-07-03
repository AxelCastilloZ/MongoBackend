import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductoDocument = Producto & Document;

@Schema({ collection: 'productos' })
export class Producto {
  @Prop({ type: String, required: true })
  _id: string;

  @Prop({ required: true })
  nombre: string;

  @Prop()
  categoria_id: string;

  @Prop()
  productor_id: string;

  @Prop()
  precio_unitario: number;

  @Prop()
  stock: number;

  @Prop()
  unidad_medida: string;

  @Prop()
  fecha_cosecha: Date;
}

export const ProductoSchema = SchemaFactory.createForClass(Producto);
