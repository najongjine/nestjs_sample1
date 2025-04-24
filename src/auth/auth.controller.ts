import { Controller, Get, Post, Request, UseGuards, Res } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { LoggedInGuard } from './auth.guard'; // 내가 만든 커스텀 가드
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req) {
    return { message: 'Login successful', user: req?.user };
  }
  @UseGuards(AuthGuard('local'))
  @Get('getlogin')
  async getlogin(@Request() req) {
    return { message: 'Login successful', user: req?.user };
  }

  @Post('logout')
  async logout(@Request() req) {
    req.logout();
    return { message: 'Logout successful' };
  }

  @UseGuards(LoggedInGuard)
  @Get('loggedOnly')
  async loggedOnly(@Request() req, @Res() res: Response) {
    /** 로그인된 요청인지 확인인 */
    if (!req.isAuthenticated()) {
      return res.json({
        success: false,
        data: null,
        message: 'not authorized',
      });
    }
    /** 로그인된 요청인지 확인인 END */

    // 로그인 되어 있을 때
    return res.json({
      success: true,
      data: req?.user,
      message: 'You are authorized',
    });
  }
}
