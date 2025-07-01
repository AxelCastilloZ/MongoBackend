import { SchemaFactory, Schema, Prop } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type VentaDocument = Venta & Document;

@Schema()
export class Venta {
  @Prop({ required: true, type: String })
  _id: string;

  @Prop({ required: true })
  fecha: Date;

  @Prop({
    type: {
      _id: String,
      nombre: String,
      telefono: String,
    },
    _id: false,
  })
  cliente: {
    // _id: string;
    nombre: string;
    telefono: string;
  };

  @Prop({
    type: [
      {
        producto_id: String,
        nombre: String,
        cantidad: Number,
        precio_unitario: Number,
        _id: false,
      },
    ],
  })
  productos_vendidos: {
    producto_id: string;
    nombre: string;
    cantidad: number;
    precio_unitario: number;
  }[];

  @Prop()
  total_venta: number;
}

export const VentaSchema = SchemaFactory.createForClass(Venta); // ✅ Asegúrate de tener esta línea

// import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
// import { Document } from 'mongoose';

// export type VentaDocument = Venta & Document;

// @Schema()
// export class Venta {
//   @Prop({ required: true })
//   fecha: Date;

//   @Prop({
//     type: {
//       nombre: String,
//       telefono: String,
//     },
//   })
//   cliente: {
//     nombre: string;
//     telefono: string;
//   };

//   @Prop([
//     {
//       producto_id: String,
//       nombre: String,
//       cantidad: Number,
//       precio_unitario: Number,
//     },
//   ])
//   productos_vendidos: {
//     producto_id: string;
//     nombre: string;
//     cantidad: number;
//     precio_unitario: number;
//   }[];

//   @Prop()
//   total_venta: number;
// }

// export const VentaSchema = SchemaFactory.createForClass(Venta);
