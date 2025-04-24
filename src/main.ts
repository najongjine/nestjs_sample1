import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as passport from 'passport';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

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
