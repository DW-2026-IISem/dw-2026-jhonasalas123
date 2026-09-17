import { Module } from '@nestjs/common';
import { PET_REPOSITORY } from './domain/interfaces/pet-repository.interface';
import { PetRepository } from './infrastructure/persistence/repositories/pet.repository';
import { CreatePetUseCase } from './application/use-cases/create-pet.use-case';
import { UpdatePetUseCase } from './application/use-cases/update-pet.use-case';
import { DeletePetUseCase } from './application/use-cases/delete-pet.use-case';
import { GetPetUseCase } from './application/use-cases/get-pet.use-case';
import { ListPetsUseCase } from './application/use-cases/list-pets.use-case';
import { PetsController } from './presentation/http/controllers/pets.controller';

@Module({
  controllers: [PetsController],
  providers: [
    PetRepository,
    { provide: PET_REPOSITORY, useExisting: PetRepository },
    CreatePetUseCase,
    UpdatePetUseCase,
    DeletePetUseCase,
    GetPetUseCase,
    ListPetsUseCase,
  ],
  exports: [PET_REPOSITORY],
})
export class PetsModule {}
