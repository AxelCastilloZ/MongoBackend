// src/productores/entities/productor.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductorDocument = Productor & Document;

@Schema()
export class Productor {
  @Prop({ required: true })
  nombre: string;

  @Prop()
  telefono: string;

  @Prop()
  correo: string;

  @Prop([String])
  productos_cultivados: string[];
}

export const ProductorSchema = SchemaFactory.createForClass(Productor);
