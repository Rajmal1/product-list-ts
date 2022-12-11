import 'reflect-metadata';
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'postgres',
  url: process.env.DATABASE_URL,
  port: 5432,
  synchronize: true,
  logging: true,
  entities: ['dist/entity/**/*{.ts,.js}'],
  migrations: ['dist/migration/**/*{.ts,.js}'],
  migrationsRun: true,
});
