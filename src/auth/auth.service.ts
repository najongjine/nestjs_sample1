import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { TUser } from '../entities/TUser';

@Injectable()
export class AuthService {
  constructor(private usersService: UserService) {}

  async validateUser(username: string, password: string): Promise<TUser> {
    const user = await this.usersService.findUser_Username(username);
    if (user && user.password === password) {
      user.password = '';
      return user;
    }
    throw new Error(
      `!!!(auth.service validateUser) username or password is wrong`,
    );
  }
}
