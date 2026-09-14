import { Module } from '@nestjs/common';
import { ClientsModule } from './clients/clients.module';
import { HealthRecordsModule } from './health-records/health-records.module';
import { PetServicesModule } from './pet-services/pet-services.module';

@Module({
  imports: [
    ClientsModule,
    HealthRecordsModule,
    PetServicesModule,
  ],
  exports: [
    ClientsModule,
    HealthRecordsModule,
    PetServicesModule,
  ],
})
export class BusinessModule {}
