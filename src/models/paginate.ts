import { Products } from 'src/modules/product/product.entity';

export class Paginate {
  public data: Products[];
  public count: number;
  public pageNumber: number;
  public totalPages: number;
}
