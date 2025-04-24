import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TUser } from '../entities/TUser';

@Module({
  imports: [TypeOrmModule.forFeature([TUser])],
  providers: [UserService],
  controllers: [UserController]
})
export class UserModule {}
