import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres', // 본인의 DB 사용자명으로 변경
      password: 'aaaa', // 본인의 DB 비밀번호로 변경
      database: 'test1', // 본인의 DB 이름으로 변경
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false, // 개발 환경에서만 사용
    }),
    UsersModule,
  ],
})
export class AppModule {}
