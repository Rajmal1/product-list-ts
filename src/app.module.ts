import { Module } from '@nestjs/common';
import { AppController } from './product/product.controller';
import { AppService } from './product/product.service';
import { ProductModule } from './product/product.module';

@Module({
  imports: [ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
