import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Products } from './product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Products)
    private productRepository: Repository<Products>,
  ) {}

  getProduct(): Promise<Products[]> {
    return this.productRepository.find({ order: { name: 'ASC' } });
  }

  getTodayValidProduct(): Promise<Products[]> {
    return this.productRepository.find({ where: { dias_para_vencimento: 0 } });
  }

  getTomorowValidProduct(): Promise<Products[]> {
    return this.productRepository.find({ where: { dias_para_vencimento: 1 } });
  }
}
