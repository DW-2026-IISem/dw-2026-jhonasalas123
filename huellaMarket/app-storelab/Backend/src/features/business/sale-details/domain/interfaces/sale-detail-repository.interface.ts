import { SaleDetail } from '../entities/sale-detail.entity';

export const SALE_DETAIL_REPOSITORY = 'SALE_DETAIL_REPOSITORY';

export interface ISaleDetailRepository {
  create(saleDetail: SaleDetail): Promise<SaleDetail>;
  update(saleDetail: SaleDetail): Promise<SaleDetail>;
  findById(id: number): Promise<SaleDetail | null>;
  findBySaleId(cabecera_id: number): Promise<SaleDetail[]>;
}
