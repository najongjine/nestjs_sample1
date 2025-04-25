import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, BadRequestException } from '@nestjs/common';
import { AuthService } from '../auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(username: string, password: string): Promise<any> {
    if (!username || !password) {
      throw new BadRequestException(
        'invalid_essential_data__username_password',
      );
    }

    const user = await this.authService.validateUser(username, password);
    if (!user) {
      throw new BadRequestException(
        'invalid_essential_data__username_password',
      );
    }
    return user;
  }
}
