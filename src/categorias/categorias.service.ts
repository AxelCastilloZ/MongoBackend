import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Categoria, CategoriaDocument } from './entities/categoria.schema';

@Injectable()
export class CategoriasService {
  constructor(
    @InjectModel(Categoria.name) private model: Model<CategoriaDocument>,
  ) {}

  create(data: Partial<Categoria>) {
    return new this.model(data).save();
  }

  findAll() {
    return this.model.find().exec();
  }

  findOne(id: string) {
    return this.model.findById(id).exec();
  }

  update(id: string, data: Partial<Categoria>) {
    return this.model.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  remove(id: string) {
    return this.model.findByIdAndDelete(id).exec();
  }
}
