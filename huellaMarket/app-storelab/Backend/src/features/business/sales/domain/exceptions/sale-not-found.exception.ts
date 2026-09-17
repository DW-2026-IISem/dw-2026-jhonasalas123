export class SaleNotFoundException extends Error {
  constructor(id: number) {
    super(`No se encontró la venta con ID ${id}`);
    this.name = 'SaleNotFoundException';
  }
}
