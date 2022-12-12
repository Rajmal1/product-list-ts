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
      synchronize: false,
      logging: true,
      entities: [__dirname + '/../**/*.entity.{js,ts}'],
      migrations: ['dist/migration/**/*{.ts,.js}'],
      migrationsRun: true,
    };
  },
};
