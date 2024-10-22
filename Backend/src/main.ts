import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { LoggerMiddleware } from './middlewares/logger';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const swaggerConfig = new DocumentBuilder()
    .setTitle('Demo swagger')
    .setDescription(
      'Esta es una API construida con Nest que creamos en el modulo 4 de HENRY',
    )
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, swaggerConfig);

  SwaggerModule.setup('api', app, document);
  app.enableCors();

  app.useStaticAssets(join(__dirname, '..', 'assets'), {
    prefix: 'assets',
  });
  app.use(new LoggerMiddleware().use);
  await app.listen(4000);
}
bootstrap();
