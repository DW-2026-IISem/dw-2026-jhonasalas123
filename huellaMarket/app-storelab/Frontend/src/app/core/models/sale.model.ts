import type { Money } from './api.model';

export interface Sale {
  id: number;
  cliente_id: number;
  fecha: string;
  subtotal: Money;
  impuestos: Money;
  total: Money;
  estado: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface SalePayload {
  cliente_id: number;
  fecha?: string;
  subtotal?: Money;
  impuestos?: Money;
  total?: Money;
  estado?: string;
}

export interface SaleResponse {
  sale: Sale;
}

export interface SalesResponse {
  sales: Sale[];
}
