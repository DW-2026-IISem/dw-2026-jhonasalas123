import { HealthRecord } from '../../../domain/entities/health-record.entity';
import { HealthRecordResponseDto } from '../../../application/dto/health-record-response.dto';
import { HealthRecordMapper } from '../../../application/mappers/health-record.mapper';

export class HealthRecordSerializer {
  static serialize(entity: HealthRecord): HealthRecordResponseDto {
    return HealthRecordMapper.toResponse(entity);
  }
}
