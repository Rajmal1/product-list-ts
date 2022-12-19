import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/api/product/sort', () => {
    return request(app.getHttpServer())
      .get('/api/product/sort?take=10&skip=0')
      .expect(200);
  });

  it('/api/product/sort', () => {
    return request(app.getHttpServer())
      .get('/api/product/today?take=10&skip=0')
      .expect(200);
  });

  it('/api/product/sort', () => {
    return request(app.getHttpServer())
      .get('/api/product/tomorow?take=10&skip=0')
      .expect(200);
  });
});
