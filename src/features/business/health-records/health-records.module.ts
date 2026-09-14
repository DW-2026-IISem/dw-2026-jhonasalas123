import { Module } from '@nestjs/common';
import { HEALTH_RECORD_REPOSITORY } from './domain/interfaces/health-record-repository.interface';
import { HealthRecordRepository } from './infrastructure/persistence/repositories/health-record.repository';
import { CreateHealthRecordUseCase } from './application/use-cases/create-health-record.use-case';
import { UpdateHealthRecordUseCase } from './application/use-cases/update-health-record.use-case';
import { DeleteHealthRecordUseCase } from './application/use-cases/delete-health-record.use-case';
import { GetHealthRecordUseCase } from './application/use-cases/get-health-record.use-case';
import { ListHealthRecordsUseCase } from './application/use-cases/list-health-records.use-case';
import { HealthRecordsController } from './presentation/http/controllers/health-records.controller';

@Module({
  controllers: [HealthRecordsController],
  providers: [
    HealthRecordRepository,
    {
      provide: HEALTH_RECORD_REPOSITORY,
      useExisting: HealthRecordRepository,
    },
    CreateHealthRecordUseCase,
    UpdateHealthRecordUseCase,
    DeleteHealthRecordUseCase,
    GetHealthRecordUseCase,
    ListHealthRecordsUseCase,
  ],
  exports: [HEALTH_RECORD_REPOSITORY],
})
export class HealthRecordsModule {}
