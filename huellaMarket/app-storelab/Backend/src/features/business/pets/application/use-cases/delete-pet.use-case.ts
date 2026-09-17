import { Inject, Injectable } from '@nestjs/common';
import { PetNotFoundException } from '../../domain/exceptions/pet-not-found.exception';
import {
  PET_REPOSITORY,
  type IPetRepository,
} from '../../domain/interfaces/pet-repository.interface';

@Injectable()
export class DeletePetUseCase {
  constructor(
    @Inject(PET_REPOSITORY)
    private readonly petRepository: IPetRepository,
  ) {}

  async execute(id: number): Promise<void> {
    const pet = await this.petRepository.findById(id);

    if (!pet) {
      throw new PetNotFoundException(id);
    }

    await this.petRepository.delete(id);
  }
}
