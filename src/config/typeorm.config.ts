import {
  TypeOrmModuleAsyncOptions,
  TypeOrmModuleOptions,
} from '@nestjs/typeorm';

export const typeOrmAsyncConfig: TypeOrmModuleAsyncOptions = {
  useFactory: async (): Promise<TypeOrmModuleOptions> => {
    return {
      type: 'postgres',
      url: process.env.DATABASE_URL,
      port: 5432,
      synchronize: true,
      logging: true,
      entities: ['dist/entity/**/*{.ts,.js}'],
      migrations: ['dist/migration/**/*{.ts,.js}'],
      migrationsRun: true,
    };
  },
};
