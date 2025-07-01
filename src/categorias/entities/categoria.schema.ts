import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CategoriaDocument = Categoria & Document;

@Schema({ collection: 'categorias' })
export class Categoria {
  @Prop({ required: true })
  _id: string;

  @Prop({ required: true })
  nombre: string;
}

export const CategoriaSchema = SchemaFactory.createForClass(Categoria);
