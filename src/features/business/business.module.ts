import { Module } from '@nestjs/common';
import { ClientsModule } from './clients/clients.module';
import { HealthRecordsModule } from './health-records/health-records.module';

@Module({
  imports: [ClientsModule, HealthRecordsModule],
  exports: [ClientsModule, HealthRecordsModule],
})
export class BusinessModule {}
