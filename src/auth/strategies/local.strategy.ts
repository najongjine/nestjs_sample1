import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import {
  Injectable,
  UnauthorizedException,
  BadRequestException,
} from '@nestjs/common';
import { AuthService } from '../auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super(); // 기본적으로 username과 password를 사용
  }

  async validate(username: string, password: string): Promise<any> {
    if (!username?.trim() || !password?.trim()) {
      console.log('## validate');
      throw new BadRequestException(
        'invalid_essential_data__username_password',
      );
    }
    const user = await this.authService.validateUser(
      username?.trim() ?? '',
      password.trim() ?? '',
    );
    if (!user) {
      throw new UnauthorizedException('Invalid_credentials');
    }
    return user;
  }
}
