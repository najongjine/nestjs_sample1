import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { TTest1Service } from './t-test1.service';
import { TTest1 } from '../entities/TTest1';

@Controller('t-test1')
export class TTest1Controller {
  constructor(private readonly tTest1Service: TTest1Service) {}

  @Post()
  async create(@Body() data: Partial<TTest1>) {
    try {
        let createdData=  await this.tTest1Service.create(data);   
        return {success:true, data:createdData, msg:""};
    } catch (error) {
        return {success:false, data:null, msg:error?.message};
    }
  }

  @Get()
  async findAll() {
    try {
        let data= await this.tTest1Service.findAll();    
        return {success:true, data:data, msg:""};
    } catch (error) {
        return {success:false, data:null, msg:error?.message};
    }
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
  async remove(@Param('id') id: number) {
    try {
        await this.tTest1Service.remove(id);    
        return {success:true, data:null, msg:""};
    } catch (error) {
        return {success:false, data:null, msg:error?.message};
    }
  }
}
