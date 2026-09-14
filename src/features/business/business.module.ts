import { Module } from '@nestjs/common';
import { ClientsModule } from './clients/clients.module';
import { PetsModule } from './pets/pets.module';

@Module({
  imports: [ClientsModule, PetsModule],
  exports: [ClientsModule, PetsModule],
})
export class BusinessModule {}
