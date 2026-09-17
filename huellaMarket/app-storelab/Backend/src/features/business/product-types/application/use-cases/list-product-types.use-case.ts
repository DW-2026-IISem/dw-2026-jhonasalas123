import { Inject, Injectable } from '@nestjs/common';
import {
  type IProductTypeRepository,
  PRODUCT_TYPE_REPOSITORY,
} from '../../domain/interfaces/product-type-repository.interface';
import { ProductTypeFilterDto } from '../dto/product-type-filter.dto';
import { ProductTypeMapper } from '../mappers/product-type.mapper';

@Injectable()
export class ListProductTypesUseCase {
  constructor(
    @Inject(PRODUCT_TYPE_REPOSITORY)
    private readonly productTypeRepository: IProductTypeRepository,
  ) {}

  async execute(filter: ProductTypeFilterDto) {
    const result = await this.productTypeRepository.findAll(filter);
    return {
      items: result.items.map((pt) => ProductTypeMapper.toResponse(pt)),
      meta: result.meta,
    };
  }
}
