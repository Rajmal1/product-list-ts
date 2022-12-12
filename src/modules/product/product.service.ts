import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Paginate } from 'src/models/paginate';
import { Repository } from 'typeorm';
import { Products } from './product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Products)
    private productRepository: Repository<Products>,
  ) {}

  async getProduct(take: string, skip: string): Promise<Paginate> {
    const [result, total] = await this.productRepository.findAndCount({
      order: { name: 'ASC' },
      take: parseInt(take.toString()) || 20,
      skip: parseInt(skip.toString()) || 0,
    });

    return {
      data: result,
      count: total,
    };
  }

  getTodayValidProduct(): Promise<Products[]> {
    return this.productRepository.find({ where: { dias_para_vencimento: 0 } });
  }

  getTomorowValidProduct(): Promise<Products[]> {
    return this.productRepository.find({ where: { dias_para_vencimento: 1 } });
  }
}
