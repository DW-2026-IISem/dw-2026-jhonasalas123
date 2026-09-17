import { Module } from '@nestjs/common';
import { PET_SERVICE_REPOSITORY } from './domain/interfaces/pet-service-repository.interface';
import { PetServiceRepository } from './infrastructure/persistence/repositories/pet-service.repository';
import { CreatePetServiceUseCase } from './application/use-cases/create-pet-service.use-case';
import { UpdatePetServiceUseCase } from './application/use-cases/update-pet-service.use-case';
import { DeletePetServiceUseCase } from './application/use-cases/delete-pet-service.use-case';
import { GetPetServiceUseCase } from './application/use-cases/get-pet-service.use-case';
import { ListPetServicesUseCase } from './application/use-cases/list-pet-services.use-case';
import { PetServicesController } from './presentation/http/controllers/pet-services.controller';

@Module({
  controllers: [PetServicesController],
  providers: [
    PetServiceRepository,
    {
      provide: PET_SERVICE_REPOSITORY,
      useExisting: PetServiceRepository,
    },
    CreatePetServiceUseCase,
    UpdatePetServiceUseCase,
    DeletePetServiceUseCase,
    GetPetServiceUseCase,
    ListPetServicesUseCase,
  ],
  exports: [PET_SERVICE_REPOSITORY],
})
export class PetServicesModule {}
