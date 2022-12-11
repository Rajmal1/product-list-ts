import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  getProduct(): Promise<Product[]> {
    return this.productRepository.find({ order: { name: 'ASC' } });
  }

  getTodayValidProduct(): Promise<Product[]> {
    return this.productRepository.find({ where: { dias_para_vencimento: 0 } });
  }

  getTomorowValidProduct(): Promise<Product[]> {
    return this.productRepository.find({ where: { dias_para_vencimento: 1 } });
  }
}
