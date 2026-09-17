export class InventoryNotFoundException extends Error {
  constructor(id: number) {
    super(`No se encontró el registro de inventario con ID ${id}`);
    this.name = 'InventoryNotFoundException';
  }
}
