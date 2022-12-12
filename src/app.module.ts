import { Module } from '@nestjs/common';
import { ProductModule } from './modules/product/product.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmAsyncConfig } from './config/typeorm.config';
import { CsvParseModule } from './modules/csv-parse/csv-parse.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync(typeOrmAsyncConfig),
    ProductModule,
    CsvParseModule,
  ],
})
export class AppModule {}
