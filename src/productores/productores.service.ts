import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Productor, ProductorDocument } from './entities/productor.schema';

@Injectable()
export class ProductoresService {
  constructor(
    @InjectModel(Productor.name)
    private productorModel: Model<ProductorDocument>,
  ) {}

  create(createProductorDto: any) {
    const nuevo = new this.productorModel(createProductorDto);
    return nuevo.save();
  }

  findAll() {
    return this.productorModel.find().exec();
  }

  findOne(id: string) {
    return this.productorModel.findById(id).exec();
  }

  update(id: string, updateProductorDto: any) {
    return this.productorModel.findByIdAndUpdate(id, updateProductorDto, {
      new: true,
    });
  }

  remove(id: string) {
    return this.productorModel.findByIdAndDelete(id).exec();
  }
}
