import { Inject, Injectable } from '@nestjs/common';
import { HealthRecordNotFoundException } from '../../domain/exceptions/health-record-not-found.exception';
import {
  HEALTH_RECORD_REPOSITORY,
  type IHealthRecordRepository,
} from '../../domain/interfaces/health-record-repository.interface';
import { HealthRecordMapper } from '../mappers/health-record.mapper';

@Injectable()
export class GetHealthRecordUseCase {
  constructor(
    @Inject(HEALTH_RECORD_REPOSITORY)
    private readonly healthRecordRepository: IHealthRecordRepository,
  ) {}

  async execute(id: number) {
    const healthRecord = await this.healthRecordRepository.findById(id);

    if (!healthRecord) {
      throw new HealthRecordNotFoundException(id);
    }

    return HealthRecordMapper.toResponse(healthRecord);
  }
}
