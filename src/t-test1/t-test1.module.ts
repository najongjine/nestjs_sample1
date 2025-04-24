import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TTest1 } from '../entities/TTest1';
import { TTest1Service } from './t-test1.service';
import { TTest1Controller } from './t-test1.controller';

@Module({
  imports: [TypeOrmModule.forFeature([TTest1])],
  providers: [TTest1Service],
  controllers: [TTest1Controller],
})
export class TTest1Module {}
