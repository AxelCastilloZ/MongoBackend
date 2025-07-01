import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ClienteDocument = Cliente & Document;

@Schema({ collection: 'clientes' })
export class Cliente {
  @Prop({ required: true, type: Number })
  _id: number;

  @Prop({ required: true })
  nombre: string;

  @Prop({ required: true })
  telefono: string;

  @Prop({ required: true })
  correo: string;

  @Prop({ required: true })
  direccion: string;

  @Prop({ required: true })
  fecha_registro: Date;
}

export const ClienteSchema = SchemaFactory.createForClass(Cliente);
