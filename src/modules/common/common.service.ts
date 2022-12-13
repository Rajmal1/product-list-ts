import { Injectable } from '@nestjs/common';
import { Paginate } from 'src/models/paginate';
import { Products } from '../product/product.entity';

@Injectable()
export class CommonService {
  public paginateResults(
    data: Products[],
    count: number,
    pageNumber: number,
    take: number,
  ): Paginate {
    return {
      data,
      count,
      pageNumber,
      totalPages: Math.round(count / take),
    };
  }
}
