import {
  TypeOrmModuleAsyncOptions,
  TypeOrmModuleOptions,
} from '@nestjs/typeorm';

const entitiesPath = process.env.ENTITIES_PATH;
const migrationsPath = process.env.ENTITIES_PATH;

export const typeOrmAsyncConfig: TypeOrmModuleAsyncOptions = {
  useFactory: async (): Promise<TypeOrmModuleOptions> => {
    return {
      type: 'postgres',
      url: process.env.DATABASE_URL,
      port: 5432,
      synchronize: false,
      logging: true,
      entities: [__dirname + entitiesPath],
      migrations: [migrationsPath],
      migrationsRun: true,
    };
  },
};
