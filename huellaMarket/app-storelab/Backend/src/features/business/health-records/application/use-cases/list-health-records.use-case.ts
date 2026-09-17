import { Inject, Injectable } from '@nestjs/common';
import {
  HEALTH_RECORD_REPOSITORY,
  type IHealthRecordRepository,
} from '../../domain/interfaces/health-record-repository.interface';
import { HealthRecordFilterDto } from '../dto/health-record-filter.dto';
import { HealthRecordMapper } from '../mappers/health-record.mapper';

@Injectable()
export class ListHealthRecordsUseCase {
  constructor(
    @Inject(HEALTH_RECORD_REPOSITORY)
    private readonly healthRecordRepository: IHealthRecordRepository,
  ) {}

  async execute(filter: HealthRecordFilterDto) {
    const result = await this.healthRecordRepository.findAll(filter);

    return {
      items: result.items.map((healthRecord) =>
        HealthRecordMapper.toResponse(healthRecord),
      ),
      meta: result.meta,
    };
  }
}
