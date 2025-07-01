import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CompraDocument = Compra & Document;

@Schema()
export class Compra {
  @Prop({ required: true })
  _id: string;

  @Prop({ required: true })
  producto: string;

  @Prop({ required: true })
  cantidad: number;
}

export const CompraSchema = SchemaFactory.createForClass(Compra);
