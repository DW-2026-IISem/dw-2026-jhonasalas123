import { Inject, Injectable } from '@nestjs/common';
import { HealthRecord } from '../../domain/entities/health-record.entity';
import {
  HEALTH_RECORD_REPOSITORY,
  type IHealthRecordRepository,
} from '../../domain/interfaces/health-record-repository.interface';
import { CreateHealthRecordDto } from '../dto/create-health-record.dto';
import { HealthRecordMapper } from '../mappers/health-record.mapper';

@Injectable()
export class CreateHealthRecordUseCase {
  constructor(
    @Inject(HEALTH_RECORD_REPOSITORY)
    private readonly healthRecordRepository: IHealthRecordRepository,
  ) {}

  async execute(dto: CreateHealthRecordDto) {
    const healthRecord = HealthRecord.create({
      nombre: dto.nombre,
      descripcion: dto.descripcion,
    });

    const created = await this.healthRecordRepository.create(healthRecord);

    return HealthRecordMapper.toResponse(created);
  }
}
