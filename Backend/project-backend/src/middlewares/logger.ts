import { NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const now = new Date().toLocaleString();
    console.log(
      `se ejecutó el método ${req.method} en la ruta ${req.originalUrl} el dia ${now}`,
    );
    next();
  }
}
