import {
  TypeOrmModuleAsyncOptions,
  TypeOrmModuleOptions,
} from '@nestjs/typeorm';
import { resolve } from 'path';

export const typeOrmAsyncConfig: TypeOrmModuleAsyncOptions = {
  useFactory: async (): Promise<TypeOrmModuleOptions> => {
    const entitiesPath = process.env.ENTITIES_PATH;
    const migrationsPath = process.env.MIGRATIONS_PATH;
    const databaseUrl = process.env.DATABASE_URL;

    return {
      type: 'postgres',
      url: databaseUrl,
      port: 5432,
      synchronize: false,
      logging: false,
      entities: [resolve(__dirname, entitiesPath)],
      migrations: [resolve(__dirname, '..', migrationsPath)],
      migrationsRun: true,
    };
  },
};
