import { Inject, Injectable } from '@nestjs/common';
import { PetServiceNotFoundException } from '../../domain/exceptions/pet-service-not-found.exception';
import {
  PET_SERVICE_REPOSITORY,
  type IPetServiceRepository,
} from '../../domain/interfaces/pet-service-repository.interface';

@Injectable()
export class DeletePetServiceUseCase {
  constructor(
    @Inject(PET_SERVICE_REPOSITORY)
    private readonly petServiceRepository: IPetServiceRepository,
  ) {}

  async execute(id: number): Promise<void> {
    const petService = await this.petServiceRepository.findById(id);

    if (!petService) {
      throw new PetServiceNotFoundException(id);
    }

    await this.petServiceRepository.delete(id);
  }
}
