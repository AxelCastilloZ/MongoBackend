import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type VentaDocument = Venta & Document;

@Schema()
export class Venta {
  @Prop({ required: true })
  fecha: Date;

  @Prop({
    type: {
      nombre: String,
      telefono: String,
    },
  })
  cliente: {
    nombre: string;
    telefono: string;
  };

  @Prop([
    {
      producto_id: String,
      nombre: String,
      cantidad: Number,
      precio_unitario: Number,
    },
  ])
  productos_vendidos: {
    producto_id: string;
    nombre: string;
    cantidad: number;
    precio_unitario: number;
  }[];

  @Prop()
  total_venta: number;
}

export const VentaSchema = SchemaFactory.createForClass(Venta);
