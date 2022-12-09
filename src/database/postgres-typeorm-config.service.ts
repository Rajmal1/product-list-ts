import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { resolve } from 'path';
const dbUri = process.env.DATABASE_URL;
const entitiesPath = process.env.ENTITIES_PATH;
const SOURCE_PATH = resolve(__dirname, '..', `src${entitiesPath}`);

@Injectable()
export default class PostgresTypeORMConfigService
  implements TypeOrmOptionsFactory
{
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      url: dbUri,
      entities: [`${SOURCE_PATH}`],
      synchronize: true,
    };
  }
}
