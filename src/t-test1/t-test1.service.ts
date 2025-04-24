import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TTest1 } from '../entities/TTest1';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class TTest1Service {
  constructor(
    @InjectRepository(TTest1)
    private readonly tTest1Repository: Repository<TTest1>,
  ) {}

  async create(data: Partial<TTest1>): Promise<TTest1> {
    const entity = await this.tTest1Repository.create(data);
    return this.tTest1Repository.save(entity);
  }

  async findAll(): Promise<TTest1[]> {
    return await this.tTest1Repository.find();
  }

  async findOne(id: number): Promise<TTest1> {
    const entity = await this.tTest1Repository.findOne({ where: { id } });
    if (!entity) {
      throw new NotFoundException(`!!! TTest1 with id ${id} not found`);
    }
    return entity;
  }

  async update(id: number, data: Partial<TTest1>): Promise<TTest1> {
    let data2=await this.tTest1Repository.findOne({ where: { id:1 } })??new TTest1();
    await this.tTest1Repository.update(id, data2);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.tTest1Repository.delete(id);
  }
}
