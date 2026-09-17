export class PaymentNotFoundException extends Error {
  constructor(id: number) {
    super(`No se encontró el pago con ID ${id}`);
    this.name = 'PaymentNotFoundException';
  }
}
