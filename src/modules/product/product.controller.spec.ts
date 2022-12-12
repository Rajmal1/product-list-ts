import { Paginate } from '../../models/paginate';
import { Repository } from 'typeorm';
import { CommonService } from '../common/common.service';
import { ProductController } from './product.controller';
import { Products } from './product.entity';
import { ProductService } from './product.service';
import { getMockRes } from '@jest-mock/express';

describe('ProductController', () => {
  let productController: ProductController;
  let productService: ProductService;
  let productRepository: Repository<Products>;
  let commonService: CommonService;

  beforeEach(async () => {
    productService = new ProductService(productRepository, commonService);
    productController = new ProductController(productService);
  });

  it('should return paginated products in alphabetical order', async () => {
    const { res } = getMockRes();
    const result = new Paginate([
      new Products('xuxu', 1),
      new Products('jabuticaba', 0),
      new Products('abacate', 0),
    ]);

    result.data.sort();

    jest
      .spyOn(productService, 'getProduct')
      .mockImplementation(async () => result);

    productController.getProduct(res, {
      take: '20',
      skip: '0',
    });

    expect(await productService.getProduct('20', '0')).toBe(result);
  });

  it('should return paginated products that expires today', async () => {
    const { res } = getMockRes();
    const result = new Paginate([
      new Products('xuxu', 0),
      new Products('jabuticaba', 0),
      new Products('abacate', 0),
    ]);
    jest
      .spyOn(productService, 'getTodayValidProduct')
      .mockImplementation(async () => result);

    productController.getTodayValidProduct(res, { take: '20', skip: '0' });

    expect(
      (await productService.getTodayValidProduct('20', '0')).data[0],
    ).toEqual(expect.objectContaining({ dias_para_vencimento: 0 }));
  });

  it('should return paginated products that expires tomorow', async () => {
    const { res } = getMockRes();
    const result = new Paginate([
      new Products('xuxu', 1),
      new Products('jabuticaba', 1),
      new Products('abacate', 1),
    ]);
    jest
      .spyOn(productService, 'getTomorowValidProduct')
      .mockImplementation(async () => result);

    productController.getTomorowValidProduct(res, { take: '20', skip: '0' });

    expect(
      (await productService.getTomorowValidProduct('20', '0')).data[0],
    ).toEqual(expect.objectContaining({ dias_para_vencimento: 1 }));
  });
});
