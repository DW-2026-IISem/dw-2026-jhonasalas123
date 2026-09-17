import { Inject, Injectable } from '@nestjs/common';
import { HealthRecordNotFoundException } from '../../domain/exceptions/health-record-not-found.exception';
import {
  HEALTH_RECORD_REPOSITORY,
  type IHealthRecordRepository,
} from '../../domain/interfaces/health-record-repository.interface';

@Injectable()
export class DeleteHealthRecordUseCase {
  constructor(
    @Inject(HEALTH_RECORD_REPOSITORY)
    private readonly healthRecordRepository: IHealthRecordRepository,
  ) {}

  async execute(id: number): Promise<void> {
    const healthRecord = await this.healthRecordRepository.findById(id);

    if (!healthRecord) {
      throw new HealthRecordNotFoundException(id);
    }

    await this.healthRecordRepository.delete(id);
  }
}
