import { Inject, Injectable } from '@nestjs/common';
import {
  PRODUCT_REPOSITORY,
  type IProductRepository,
} from '../../domain/interfaces/product-repository.interface';
import { ProductFilterDto } from '../dto/product-filter.dto';
import { ProductMapper } from '../mappers/product.mapper';

@Injectable()
export class ListProductsUseCase {
  constructor(
    @Inject(PRODUCT_REPOSITORY)
    private readonly productRepository: IProductRepository,
  ) {}

  async execute(filter: ProductFilterDto) {
    const result = await this.productRepository.findAll(filter);

    return {
      items: result.items.map((product) =>
        ProductMapper.toResponse(product),
      ),
      meta: result.meta,
    };
  }
}
