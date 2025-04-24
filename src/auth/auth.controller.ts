import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req) {
    return { message: 'Login successful', user: req?.user };
  }

  @Post('logout')
  async logout(@Request() req) {
    req.logout();
    return { message: 'Logout successful' };
  }
}
