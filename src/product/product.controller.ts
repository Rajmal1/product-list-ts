import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { Product } from './product.entity';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async getProduct(@Res() res: Response): Promise<Product[]> {
    try {
      const productList = await this.productService.getProduct();

      if (productList) {
        return productList;
      }
      res.status(204).send();
    } catch (error) {
      res.status(500).send('Error in the application.');
    }
  }

  @Get('today')
  async getTodayValidProduct(): Promise<Product[]> {
    return await this.productService.getTodayValidProduct();
  }

  @Get('tomorow')
  async getTomorowValidProduct(): Promise<Product[]> {
    return await this.productService.getTomorowValidProduct();
  }
}
