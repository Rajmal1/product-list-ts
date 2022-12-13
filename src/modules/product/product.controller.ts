import { Controller, Get, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import { ProductService } from './product.service';

@Controller('api/product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get('sort')
  async getProduct(
    @Res() res: Response,
    @Query() params: { take: string; skip: string },
  ) {
    try {
      const productList = await this.productService.getProduct(
        params.take,
        params.skip,
      );

      res.send(productList);
    } catch (error) {
      res.status(500).send('Error in the application.');
    }
  }

  @Get('today')
  async getTodayValidProduct(
    @Res() res: Response,
    @Query() params: { take: string; skip: string },
  ) {
    try {
      const productList = await this.productService.getTodayValidProduct(
        params.take,
        params.skip,
      );

      res.send(productList);
    } catch (error) {
      res.status(500).send('Error in the application.');
    }
  }

  @Get('tomorow')
  async getTomorowValidProduct(
    @Res() res: Response,
    @Query() params: { take: string; skip: string },
  ) {
    try {
      const productList = await this.productService.getTomorowValidProduct(
        params.take,
        params.skip,
      );

      res.send(productList);
    } catch (error) {
      res.status(500).send('Error in the application.');
    }
  }
}
