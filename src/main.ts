import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as passport from 'passport';
import { BadRequestExceptionFilter } from './auth/strategies/customBadRequestException';
import { UnauthorizedExceptionFilter } from './auth/strategies/customUnauthorizedException';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  /** 내가만든 커스텀 Filter 전역 적용하기  */
  app.useGlobalFilters(new BadRequestExceptionFilter());
  app.useGlobalFilters(new UnauthorizedExceptionFilter());
  /** 내가만든 커스텀 Filter 전역 적용하기 END */

  // app.enableCors({
  //   origin: 'http://localhost:3001', // React 앱의 주소
  //   credentials: true,
  // });

  /** 로그인. passport */
  app.use(
    session({
      secret: 'your-secret-key',
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 60 * 60 * 1000, // 1시간
      },
    }),
  );

  app.use(passport.initialize());
  app.use(passport.session());
  /** 로그인. passport  END */

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
