import { Sale } from '../../domain/entities/sale.entity';
import { SaleResponseDto } from '../dto/sale-response.dto';
import { SaleModel } from '../../infrastructure/persistence/models/sale.model';

export class SaleMapper {
  static toDomain(model: SaleModel): Sale {
    return Sale.reconstitute({
      id: model.id,
      cliente_id: model.cliente_id,
      fecha: model.fecha,
      subtotal: Number(model.subtotal),
      impuestos: Number(model.impuestos),
      total: Number(model.total),
      estado: model.estado,
      createdAt: model.createdAt,
      updatedAt: model.updatedAt,
    });
  }

  static toResponse(entity: Sale): SaleResponseDto {
    return {
      id: entity.id!,
      cliente_id: entity.cliente_id,
      fecha: entity.fecha,
      subtotal: entity.subtotal,
      impuestos: entity.impuestos,
      total: entity.total,
      estado: entity.estado,
      createdAt: entity.createdAt!,
      updatedAt: entity.updatedAt!,
    };
  }

  static toPersistence(entity: Sale): Partial<SaleModel> {
    return {
      id: entity.id,
      cliente_id: entity.cliente_id,
      fecha: entity.fecha,
      subtotal: entity.subtotal,
      impuestos: entity.impuestos,
      total: entity.total,
      estado: entity.estado,
    };
  }
}
