export interface Inventory {
  id: number;
  ubicacion_id: number;
  item_id: number;
  cantidad: number;
  stock_minimo: number;
  updatedAt?: string;
}

export interface InventoryResponse {
  inventory: Inventory;
}

export interface InventoriesResponse {
  inventories: Inventory[];
}
