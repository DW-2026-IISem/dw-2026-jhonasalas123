import { Inject, Injectable } from '@nestjs/common';
import { Product } from '../../domain/entities/product.entity';
import {
  PRODUCT_REPOSITORY,
  type IProductRepository,
} from '../../domain/interfaces/product-repository.interface';
import { CreateProductDto } from '../dto/create-product.dto';
import { ProductMapper } from '../mappers/product.mapper';

@Injectable()
export class CreateProductUseCase {
  constructor(
    @Inject(PRODUCT_REPOSITORY)
    private readonly productRepository: IProductRepository,
  ) {}

  async execute(dto: CreateProductDto) {
    const existing = await this.productRepository.findBySku(dto.sku);

    if (existing) {
      throw new Error(`El SKU '${dto.sku}' ya está registrado`);
    }

    const product = Product.create({
      sku: dto.sku,
      nombre: dto.nombre,
      descripcion: dto.descripcion,
      precio: dto.precio,
    });

    const created = await this.productRepository.create(product);

    return ProductMapper.toResponse(created);
  }
}
