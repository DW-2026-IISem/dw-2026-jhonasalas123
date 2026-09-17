import { Inject, Injectable } from '@nestjs/common';
import { HealthRecordNotFoundException } from '../../domain/exceptions/health-record-not-found.exception';
import {
  HEALTH_RECORD_REPOSITORY,
  type IHealthRecordRepository,
} from '../../domain/interfaces/health-record-repository.interface';
import { UpdateHealthRecordDto } from '../dto/update-health-record.dto';
import { HealthRecordMapper } from '../mappers/health-record.mapper';

@Injectable()
export class UpdateHealthRecordUseCase {
  constructor(
    @Inject(HEALTH_RECORD_REPOSITORY)
    private readonly healthRecordRepository: IHealthRecordRepository,
  ) {}

  async execute(id: number, dto: UpdateHealthRecordDto) {
    const healthRecord = await this.healthRecordRepository.findById(id);

    if (!healthRecord) {
      throw new HealthRecordNotFoundException(id);
    }

    healthRecord.update({
      nombre: dto.nombre,
      descripcion: dto.descripcion,
    });

    const updated =
      await this.healthRecordRepository.update(healthRecord);

    return HealthRecordMapper.toResponse(updated);
  }
}
