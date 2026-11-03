export interface SaleDetail {
  id: number;
  cabecera_id: number;
  item_id: number;
  cantidad: number;
  valor_unitario: number | string;
  total: number | string;
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

export type SaleDetailPayload = Omit<
  SaleDetail,
  'id' | 'createdAt' | 'updatedAt'
>;
