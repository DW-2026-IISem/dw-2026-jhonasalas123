import { Payment } from '../entities/payment.entity';

export const PAYMENT_REPOSITORY = 'PAYMENT_REPOSITORY';

export interface IPaymentRepository {
  create(payment: Payment): Promise<Payment>;
  update(payment: Payment): Promise<Payment>;
  findById(id: number): Promise<Payment | null>;
  findByReference(
    referencia_tipo: string,
    referencia_id: number,
  ): Promise<Payment[]>;
}
