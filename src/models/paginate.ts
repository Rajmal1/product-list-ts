import { Products } from 'src/modules/product/product.entity';

export class Paginate {
  constructor(products?: Products[]) {
    this.data = products;
  }

  public data: Products[];
  public count: number;
  public pageNumber: number;
  public totalPages: number;
}
