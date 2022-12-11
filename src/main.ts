import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { AppDataSource } from './data-source';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors();
  AppDataSource.initialize()
    .then(async () => {
      console.log('Inserting a new user into the database...');
    })
    .catch((error) => console.log(error));
  await app.listen(3000);
}
bootstrap();
