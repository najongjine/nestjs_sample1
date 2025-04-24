import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TUser } from '../entities/TUser';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(TUser)
        private readonly tUserRepository: Repository<TUser>,
      ) {}

      async findUser_Username(username: string): Promise<TUser> {
        const entity = await this.tUserRepository.findOne({ where: { username:username } });
        if (!entity) {
          throw new NotFoundException(`!!!(user.service findUser_Username_Password) user not found.`);
        }
        return entity;
      }
}
