import { Status } from '../../../../../common/enums/status.enum';
import { Product } from '../../domain/entities/product.entity';
import { ProductResponseDto } from '../dto/product-response.dto';
import { ProductModel } from '../../infrastructure/persistence/models/product.model';

export class ProductMapper {
  static toDomain(model: ProductModel): Product {
    return Product.reconstitute({
      id: model.id,
      name: model.name,
      brand: model.brand,
      price: Number(model.price),
      minStock: model.minStock,
      quantity: model.quantity,
      productTypeId: model.productTypeId,
      status: model.status,
      createdAt: model.createdAt,
      updatedAt: model.updatedAt,
    });
  }

  static toResponse(entity: Product): ProductResponseDto {
    return {
      id: entity.id!,
      name: entity.name,
      brand: entity.brand,
      price: entity.price,
      minStock: entity.minStock,
      quantity: entity.quantity,
      productTypeId: entity.productTypeId,
      status: entity.status,
      createdAt: entity.createdAt!,
      updatedAt: entity.updatedAt!,
    };
  }

  static toPersistence(entity: Product): Partial<ProductModel> {
    return {
      id: entity.id,
      name: entity.name,
      brand: entity.brand,
      price: entity.price,
      minStock: entity.minStock,
      quantity: entity.quantity,
      productTypeId: entity.productTypeId,
      status: entity.status ?? Status.ACTIVE,
    };
  }
}
