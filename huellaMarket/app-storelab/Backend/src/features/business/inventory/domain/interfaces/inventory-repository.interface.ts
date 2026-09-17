import { PaginatedResult } from '../../../../../common/interfaces/pagination.interface';
import { Inventory } from '../entities/inventory.entity';

export const INVENTORY_REPOSITORY = 'INVENTORY_REPOSITORY';

export interface InventoryFindAllParams {
  page?: number;
  limit?: number;
  ubicacion_id?: number;
  item_id?: number;
}

export interface IInventoryRepository {
  create(inventory: Inventory): Promise<Inventory>;
  update(inventory: Inventory): Promise<Inventory>;
  delete(id: number): Promise<void>;
  findById(id: number): Promise<Inventory | null>;
  findByItemAndLocation(
    item_id: number,
    ubicacion_id: number,
  ): Promise<Inventory | null>;
  findAll(
    params: InventoryFindAllParams,
  ): Promise<PaginatedResult<Inventory>>;
}
