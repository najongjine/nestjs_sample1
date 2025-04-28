import {
  Controller,
  Get,
  Post,
  Req,
  Res,
  Next,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { LocalAuthGuard } from './strategies/local-auth.guard';
import { LoggedInGuard } from './strategies/auth.guard'; // 내가 만든 커스텀 가드
import { Request, Response, NextFunction } from 'express';

@Controller('auth')
export class AuthController {
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Req() req, @Res() res) {
    try {
      return res.json({
        success: true,
        user: req?.user,
        message: 'Login successful',
      });
    } catch (error) {
      return res.json({
        success: true,
        user: null,
        message: `!!!(auth.controller login) ${error?.message ?? ''}`,
      });
    }
  }

  @UseGuards(LocalAuthGuard)
  @Get('wronglogin')
  async wronglogin(@Req() req) {
    try {
      return { success: true, user: req?.user, message: 'Login successful' };
    } catch (error) {
      return {
        success: true,
        user: null,
        message: `!!!(auth.controller login) ${error?.message ?? ''}`,
      };
    }
  }

  @Post('logout')
  async logout(@Req() req, @Res() res, @Next() next: NextFunction) {
    try {
      req.logout(function (err) {
        if (err) {
          return next(err);
        }
        res.json({
          success: true,
          user: null,
          message: 'Logout successful',
        });
      });
    } catch (error) {
      return {
        success: false,
        user: null,
        message: `!!!(auth.controller logout) ${error?.message ?? ''}`,
      };
    }
  }

  @UseGuards(LoggedInGuard)
  @Get('loggedOnly')
  async loggedOnly(@Req() req, @Res() res) {
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

  @Get('current-user')
  getCurrentUser(@Req() req) {
    if (req.isAuthenticated()) {
      let user = req?.user as any;
      if (!user?.id) throw new Error('no_user_info');
      if (user?.password) user.password = '';
      return {
        success: true,
        user: user,
        message: 'userinfo_provided',
      };
    } else {
      return {
        success: false,
        user: null,
        message: 'Not_authenticated',
      };
    }
  }
}
