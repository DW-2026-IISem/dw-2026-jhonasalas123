import { Inject, Injectable } from '@nestjs/common';
import { PetNotFoundException } from '../../domain/exceptions/pet-not-found.exception';
import {
  PET_REPOSITORY,
  type IPetRepository,
} from '../../domain/interfaces/pet-repository.interface';
import { PetMapper } from '../mappers/pet.mapper';

@Injectable()
export class GetPetUseCase {
  constructor(
    @Inject(PET_REPOSITORY)
    private readonly petRepository: IPetRepository,
  ) {}

  async execute(id: number) {
    const pet = await this.petRepository.findById(id);

    if (!pet) {
      throw new PetNotFoundException(id);
    }

    return PetMapper.toResponse(pet);
  }
}
