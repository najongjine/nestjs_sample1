import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { TTest1Service } from './t-test1.service';
import { TTest1 } from '../entities/TTest1';

@Controller('t-test1')
export class TTest1Controller {
  constructor(private readonly tTest1Service: TTest1Service) {}

  @Post()
  create(@Body() data: Partial<TTest1>) {
    return this.tTest1Service.create(data);
  }

  @Get()
  findAll() {
    return this.tTest1Service.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    try {
        let data= await this.tTest1Service.findOne(id);
        return {success:true, data:data, msg:""};
    } catch (error) {
        return {success:false, data:null, msg:error?.message};
    }
  }

  @Get('/update/:id')
  async update(@Param('id') id: number, @Body() data: Partial<TTest1>) {
    try {
        let updatedData= await this.tTest1Service.update(id, data);
        return {success:true, data:updatedData, msg:""};
    } catch (error) {
        return {success:false, data:null, msg:error?.message};
    }
    return 
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.tTest1Service.remove(id);
  }
}
