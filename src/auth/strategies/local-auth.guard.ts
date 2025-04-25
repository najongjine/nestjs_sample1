import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {
  handleRequest(err, user, info) {
    if (err || !user) {
      // 여기에서 커스텀 예외를 던집니다.
      throw new UnauthorizedException(
        'invalid_essential_data__username_password',
      );
    }
    return user;
  }
}
