import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Paginate } from 'src/models/paginate';
import { Repository } from 'typeorm';
import { CommonService } from '../common/common.service';
import { Products } from './product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Products)
    private readonly productRepository: Repository<Products>,
    private readonly commonModule: CommonService,
  ) {}

  async getProduct(take: string, skip: string): Promise<Paginate> {
    const [result, total] = await this.productRepository.findAndCount({
      order: { name: 'ASC' },
      take: parseInt(take.toString()) || 20,
      skip: parseInt(skip.toString()) || 0,
    });

    return this.commonModule.paginateResults(
      result,
      total,
      parseInt(skip),
      parseInt(take),
    );
  }

  async getTodayValidProduct(take: string, skip: string): Promise<Paginate> {
    const [result, total] = await this.productRepository.findAndCount({
      where: { dias_para_vencimento: 0 },
    });
    return this.commonModule.paginateResults(
      result,
      total,
      parseInt(skip),
      parseInt(take),
    );
  }

  async getTomorowValidProduct(take: string, skip: string): Promise<Paginate> {
    const [result, total] = await this.productRepository.findAndCount({
      where: { dias_para_vencimento: 1 },
    });

    return this.commonModule.paginateResults(
      result,
      total,
      parseInt(skip),
      parseInt(take),
    );
  }
}
