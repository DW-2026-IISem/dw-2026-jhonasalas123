import { Inventory } from '../../domain/entities/inventory.entity';
import { InventoryResponseDto } from '../dto/inventory-response.dto';
import { InventoryModel } from '../../infrastructure/persistence/models/inventory.model';

export class InventoryMapper {
  static toDomain(model: InventoryModel): Inventory {
    return Inventory.reconstitute({
      id: model.id,
      ubicacion_id: model.ubicacion_id,
      item_id: model.item_id,
      cantidad: model.cantidad,
      stock_minimo: model.stock_minimo,
      updated_at: model.updated_at,
    });
  }

  static toResponse(entity: Inventory): InventoryResponseDto {
    return {
      id: entity.id!,
      ubicacion_id: entity.ubicacion_id,
      item_id: entity.item_id,
      cantidad: entity.cantidad,
      stock_minimo: entity.stock_minimo,
      updated_at: entity.updated_at!,
    };
  }

  static toPersistence(entity: Inventory): Partial<InventoryModel> {
    return {
      id: entity.id,
      ubicacion_id: entity.ubicacion_id,
      item_id: entity.item_id,
      cantidad: entity.cantidad,
      stock_minimo: entity.stock_minimo,
      updated_at: entity.updated_at,
    };
  }
}
