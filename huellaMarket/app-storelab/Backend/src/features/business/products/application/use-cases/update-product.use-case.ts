import { Inject, Injectable } from '@nestjs/common';
import { ProductNotFoundException } from '../../domain/exceptions/product-not-found.exception';
import {
  PRODUCT_REPOSITORY,
  type IProductRepository,
} from '../../domain/interfaces/product-repository.interface';
import { UpdateProductDto } from '../dto/update-product.dto';
import { ProductMapper } from '../mappers/product.mapper';

@Injectable()
export class UpdateProductUseCase {
  constructor(
    @Inject(PRODUCT_REPOSITORY)
    private readonly productRepository: IProductRepository,
  ) {}

  async execute(id: number, dto: UpdateProductDto) {
    const product = await this.productRepository.findById(id);

    if (!product) {
      throw new ProductNotFoundException(id);
    }

    if (dto.sku && dto.sku !== product.sku) {
      const existing = await this.productRepository.findBySku(dto.sku);

      if (existing) {
        throw new Error(`El SKU '${dto.sku}' ya está registrado`);
      }
    }

    product.update({
      sku: dto.sku,
      nombre: dto.nombre,
      descripcion: dto.descripcion,
      precio: dto.precio,
    });

    const updated =
      await this.productRepository.update(product);

    return ProductMapper.toResponse(updated);
  }
}
