import { Module } from '@nestjs/common';
import { ProductController } from './product/product.controller';
import { ProductModule } from './product/product.module';
import { ProductService } from './product/product.service';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ProductModule, DatabaseModule, ConfigModule.forRoot()],
  controllers: [ProductController],
  providers: [ProductService],
})
export class AppModule {}
