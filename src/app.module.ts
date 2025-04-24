import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TTest1Module } from './t-test1/t-test1.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres', // 본인의 DB 사용자명으로 변경
      password: 'aaaa', // 본인의 DB 비밀번호로 변경
      database: 'test1', // 본인의 DB 이름으로 변경
      //entities: [__dirname + '/entities/*{.ts,.js}'],
      autoLoadEntities: true,
      synchronize: false, // 개발 환경에서만 사용
    }),
    TTest1Module,
    AuthModule,
    UserModule,
  ],
})
export class AppModule {}
