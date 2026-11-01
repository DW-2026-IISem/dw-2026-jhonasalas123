import type { Money } from './api.model';

export interface Payment {
  id: number;
  referencia_tipo: string;
  referencia_id: number;
  metodo: string;
  monto: Money;
  fecha: string;
  estado: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface PaymentResponse {
  payment: Payment;
}

export interface PaymentsResponse {
  payments: Payment[];
}
