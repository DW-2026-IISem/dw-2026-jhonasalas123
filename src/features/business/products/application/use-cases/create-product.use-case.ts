import { Inject, Injectable } from '@nestjs/common';
import { ProductTypeNotFoundException } from '../../../product-types/domain/exceptions/product-type-not-found.exception';
import {
  type IProductTypeRepository,
  PRODUCT_TYPE_REPOSITORY,
} from '../../../product-types/domain/interfaces/product-type-repository.interface';
import {
  type IProductRepository,
  PRODUCT_REPOSITORY,
} from '../../domain/interfaces/product-repository.interface';
import { Product } from '../../domain/entities/product.entity';
import { CreateProductDto } from '../dto/create-product.dto';
import { ProductMapper } from '../mappers/product.mapper';

@Injectable()
export class CreateProductUseCase {
  constructor(
    @Inject(PRODUCT_REPOSITORY)
    private readonly productRepository: IProductRepository,
    @Inject(PRODUCT_TYPE_REPOSITORY)
    private readonly productTypeRepository: IProductTypeRepository,
  ) {}

  async execute(dto: CreateProductDto) {
    const productType = await this.productTypeRepository.findById(
      dto.productTypeId,
    );

    if (!productType) {
      throw new ProductTypeNotFoundException(dto.productTypeId);
    }

    const product = Product.create({
      name: dto.name,
      brand: dto.brand,
      price: dto.price,
      minStock: dto.minStock,
      quantity: dto.quantity,
      productTypeId: dto.productTypeId,
    });

    const created = await this.productRepository.create(product);

    return ProductMapper.toResponse(created);
  }
}
