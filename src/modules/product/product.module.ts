import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonService } from '../common/common.service';
import { ProductController } from './product.controller';
import { Products } from './product.entity';
import { ProductService } from './product.service';

@Module({
  controllers: [ProductController],
  providers: [ProductService, CommonService],
  imports: [TypeOrmModule.forFeature([Products])],
  exports: [ProductService],
})
export class ProductModule {}
