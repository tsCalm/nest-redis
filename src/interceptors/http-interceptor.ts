import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { RedisString } from 'src/cache-module/redis-string.service';

@Injectable()
export class RedisCacheInterceptor implements NestInterceptor {
  protected allowMethod = ['GET'];
  constructor(private readonly _redis: RedisString) {}
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const isCached = true;
    const ctx = context.switchToHttp();
    const request = ctx.getRequest<Request>();
    const httpMethod = request.method;
    const url = request.url;
    const body = request.body;
    console.log(request.url);
    // if (isCached) {
    //   return of([]);
    // }
    return next.handle();
  }
}
