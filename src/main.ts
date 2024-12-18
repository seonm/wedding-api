import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { Request, Response } from 'express';

async function bootstrap() {
  const options = {
    cors: true,
  };

  const app = await NestFactory.create(AppModule, options);

  // app.enableCors({
  //   origin: [
  //     'https://seonm.github.io',
  //     'https://seonm.github.io/attend',
  //     'http://localhost:3000',
  //   ],
  //   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  //   allowedHeaders: [
  //     'Origin',
  //     'X-Requested-With',
  //     'Content-Type',
  //     'Accept',
  //     'Authorization',
  //   ],
  // });

  // app.use((req: Request, res: Response, next: Function) => {
  //   if (req.method === 'OPTIONS') {
  //     res.setHeader('Access-Control-Allow-Origin', '*');
  //     res.setHeader(
  //       'Access-Control-Allow-Methods',
  //       'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  //     );
  //     res.setHeader(
  //       'Access-Control-Allow-Headers',
  //       'Content-Type, Authorization',
  //     );
  //     res.status(204).send();
  //   } else {
  //     next();
  //   }
  // });

  await app.listen(3000);
}
bootstrap();
