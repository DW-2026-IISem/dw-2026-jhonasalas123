import type { Money } from './api.model';

export interface SaleDetail {
  id: number;
  cabecera_id: number;
  item_id: number;
  cantidad: number;
  valor_unitario: Money;
  total: Money;
  observaciones?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface SaleDetailResponse {
  saleDetail: SaleDetail;
}

export interface SaleDetailsResponse {
  saleDetails: SaleDetail[];
}
