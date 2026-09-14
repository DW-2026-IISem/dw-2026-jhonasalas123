import { PaginatedResult } from '../../../../../common/interfaces/pagination.interface';
import { HealthRecord } from '../entities/health-record.entity';

export const HEALTH_RECORD_REPOSITORY = 'HEALTH_RECORD_REPOSITORY';

export interface HealthRecordFindAllParams {
  page?: number;
  limit?: number;
  search?: string;
}

export interface IHealthRecordRepository {
  create(healthRecord: HealthRecord): Promise<HealthRecord>;
  update(healthRecord: HealthRecord): Promise<HealthRecord>;
  delete(id: number): Promise<void>;
  findById(id: number): Promise<HealthRecord | null>;
  findAll(
    params: HealthRecordFindAllParams,
  ): Promise<PaginatedResult<HealthRecord>>;
}
