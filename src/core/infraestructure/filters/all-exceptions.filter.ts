import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';

import { EmailAlreadyExistsException } from '../../../modules/users/domain/exceptions/email-already-exists.exception';
import { UniqueConstraintException } from '../../domain/exceptions/unique-constraint.exception';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let message = 'Internal server error';
    let errorName = 'InternalServerError';

    if (exception instanceof EmailAlreadyExistsException) {
      status = HttpStatus.CONFLICT; // 409
      message = exception.message;
      errorName = exception.name;
    } else if (exception instanceof UniqueConstraintException) {
      status = HttpStatus.CONFLICT;
      message = exception.message;
      errorName = exception.name;
    } else if (exception instanceof HttpException) {
      status = exception.getStatus();
      const res = exception.getResponse();

      if (typeof res === 'string') {
        message = res;
      } else if (
        typeof res === 'object' &&
        res !== null &&
        'message' in res
      ) {
        message = (res as any).message;
        errorName = (res as any).error || exception.name;
      }
    } else if (exception instanceof Error) {
      message = exception.message;
      errorName = exception.name;
    }

    response.status(status).json({
      statusCode: status,
      message,
      error: errorName,
      timestamp: new Date().toISOString(),
    });
  }
}
