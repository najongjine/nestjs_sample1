import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';
import { Response } from 'express';

/**
 * passport 세션 로그인에선 stragegies 에 있는 local-auth.guard.ts, local.strategy.ts 에서 던지는 Exception을 controller 의 catch 부분에서 잡아내질 못한다. throw new Error 를 하면
 * 서버에러가 발생한다.
 * 하지만 클라에게 으압을 보낼때는 나만의 데이터 형식으로 보내고 싶다.
 * 그래서 커스텀 HttpExceptionFilter 를 만들고, 이것을 적용하고 싶은 컨트롤러에게 부착하면 된다
 */
@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    const status = exception.getStatus();
    const exceptionResponse = exception.getResponse();
    let message = '';

    if (typeof exceptionResponse === 'string') {
      message = exceptionResponse;
    } else if (
      typeof exceptionResponse === 'object' &&
      exceptionResponse['message']
    ) {
      message = Array.isArray(exceptionResponse['message'])
        ? exceptionResponse['message'].join(', ')
        : exceptionResponse['message'];
    }

    response.status(status).json({
      success: false,
      user: null,
      message: `!!!custHttpExceptionFilter_${message}`,
    });
  }
}
