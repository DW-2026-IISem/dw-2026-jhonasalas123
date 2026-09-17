export class SaleDetailNotFoundException extends Error {
  constructor(id: number) {
    super(`No se encontró el detalle de venta con ID ${id}`);
    this.name = 'SaleDetailNotFoundException';
  }
}
