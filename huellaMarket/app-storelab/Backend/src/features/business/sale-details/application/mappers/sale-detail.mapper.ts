import { SaleDetail } from '../../domain/entities/sale-detail.entity';
import { SaleDetailResponseDto } from '../dto/sale-detail-response.dto';
import { SaleDetailModel } from '../../infrastructure/persistence/models/sale-detail.model';

export class SaleDetailMapper {
  static toDomain(model: SaleDetailModel): SaleDetail {
    return SaleDetail.reconstitute({
      id: model.id,
      cabecera_id: model.cabecera_id,
      item_id: model.item_id,
      cantidad: model.cantidad,
      valor_unitario: Number(model.valor_unitario),
      total: Number(model.total),
      observaciones: model.observaciones ?? undefined,
      createdAt: model.createdAt,
      updatedAt: model.updatedAt,
    });
  }

  static toResponse(entity: SaleDetail): SaleDetailResponseDto {
    return {
      id: entity.id!,
      cabecera_id: entity.cabecera_id,
      item_id: entity.item_id,
      cantidad: entity.cantidad,
      valor_unitario: entity.valor_unitario,
      total: entity.total,
      observaciones: entity.observaciones,
      createdAt: entity.createdAt!,
      updatedAt: entity.updatedAt!,
    };
  }

  static toPersistence(entity: SaleDetail): Partial<SaleDetailModel> {
    return {
      id: entity.id,
      cabecera_id: entity.cabecera_id,
      item_id: entity.item_id,
      cantidad: entity.cantidad,
      valor_unitario: entity.valor_unitario,
      total: entity.total,
      observaciones: entity.observaciones ?? null,
    };
  }
}
