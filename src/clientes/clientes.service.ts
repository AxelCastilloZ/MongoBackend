import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cliente, ClienteDocument } from './entities/cliente.schema';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';

@Injectable()
export class ClientesService {
  constructor(
    @InjectModel(Cliente.name)
    private readonly clienteModel: Model<ClienteDocument>,
  ) {}

  async create(dto: CreateClienteDto): Promise<Cliente> {
    const cliente = new this.clienteModel(dto);
    return cliente.save();
  }

  async findAll(): Promise<Cliente[]> {
    return this.clienteModel.find().exec();
  }

  async findOne(id: number): Promise<Cliente> {
    const cliente = await this.clienteModel.findById(id).exec();
    if (!cliente) throw new NotFoundException('Cliente no encontrado');
    return cliente;
  }

  async update(id: number, dto: UpdateClienteDto): Promise<Cliente> {
    const cliente = await this.clienteModel
      .findByIdAndUpdate(id, dto, { new: true })
      .exec();
    if (!cliente) throw new NotFoundException('Cliente no encontrado');
    return cliente;
  }

  async remove(id: number): Promise<{ message: string }> {
    const result = await this.clienteModel.findByIdAndDelete(id).exec();
    if (!result) throw new NotFoundException('Cliente no encontrado');
    return { message: 'Cliente eliminado' };
  }
}
