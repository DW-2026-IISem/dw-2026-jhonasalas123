import { Module } from '@nestjs/common';
import { ClientsModule } from './clients/clients.module';
import { ProvidersModule } from './providers/providers.module';
import { PetsModule } from './pets/pets.module';
import { HealthRecordsModule } from './health-records/health-records.module';
import { PetServicesModule } from './pet-services/pet-services.module';
import { ServiceAppointmentsModule } from './appointments/service-appointments.module';
import { ProductTypesModule } from './product-types/product-types.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    ClientsModule,
    ProvidersModule,
    PetsModule,
    HealthRecordsModule,
    PetServicesModule,
    ServiceAppointmentsModule,
    ProductTypesModule,
    ProductsModule,
  ],
  exports: [
    ClientsModule,
    ProvidersModule,
    PetsModule,
    HealthRecordsModule,
    PetServicesModule,
    ServiceAppointmentsModule,
    ProductTypesModule,
    ProductsModule,
  ],
})
export class BusinessModule {}
