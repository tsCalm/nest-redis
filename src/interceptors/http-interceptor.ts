import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { PATH_METADATA } from '@nestjs/common/constants';
import { Reflector } from '@nestjs/core';
import { Observable, of } from 'rxjs';
import { CustomRedis } from 'src/cache-module/custom-redis.service';

@Injectable()
export class RedisCacheInterceptor implements NestInterceptor {
  constructor(
    private readonly reflector: Reflector,
    private readonly _redis: CustomRedis,
  ) {}
  async intercept(context: ExecutionContext, next: CallHandler): Promise<any> {
    const startTime = new Date().getTime();

    const ctx = context.switchToHttp();
    const request = ctx.getRequest();
    const { id } = request.params;
    // 컨트롤러 prefix를 알 수 있다.
    const controllerPath = this.reflector.get<string>(
      PATH_METADATA,
      context.getClass(),
    );

    const key = `${controllerPath}:${id}`;
    const findedKey = await this._redis.get(key);
    const endTime = new Date().getTime();
    console.log('in-memory - 걸린시간 : ', (endTime - startTime) / 1000 + 'S');

    if (findedKey) return JSON.parse(findedKey);
    return next.handle();
  }
}
