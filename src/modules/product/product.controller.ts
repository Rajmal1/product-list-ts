import { Controller, Get, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import { Products } from './product.entity';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async getProduct(
    @Res() res: Response,
    @Query() params: { take: string; skip: string },
  ) {
    try {
      const productList = await this.productService.getProduct(
        params.take,
        params.skip,
      );

      if (!productList || productList.data.length <= 0) {
        res.status(204).send();
      }
      res.send(productList);
    } catch (error) {
      res.status(500).send('Error in the application.');
    }
  }

  @Get('today')
  async getTodayValidProduct(@Res() res: Response): Promise<Products[]> {
    try {
      const productList = await this.productService.getTodayValidProduct();

      if (!productList || productList.length <= 0) {
        res.status(204).send();
      }
      return productList;
    } catch (error) {
      res.status(500).send('Error in the application.');
    }
  }

  @Get('tomorow')
  async getTomorowValidProduct(@Res() res: Response): Promise<Products[]> {
    try {
      const productList = await this.productService.getTomorowValidProduct();

      if (!productList || productList.length <= 0) {
        res.status(204).send();
      }
      return productList;
    } catch (error) {
      res.status(500).send('Error in the application.');
    }
  }
}
