import { Inject, Injectable } from '@nestjs/common';
import { PetNotFoundException } from '../../domain/exceptions/pet-not-found.exception';
import {
  PET_REPOSITORY,
  type IPetRepository,
} from '../../domain/interfaces/pet-repository.interface';
import { UpdatePetDto } from '../dto/update-pet.dto';
import { PetMapper } from '../mappers/pet.mapper';

@Injectable()
export class UpdatePetUseCase {
  constructor(
    @Inject(PET_REPOSITORY)
    private readonly petRepository: IPetRepository,
  ) {}

  async execute(id: number, dto: UpdatePetDto) {
    const pet = await this.petRepository.findById(id);

    if (!pet) {
      throw new PetNotFoundException(id);
    }

    pet.update({
      nombre: dto.nombre,
      descripcion: dto.descripcion,
    });

    const updated = await this.petRepository.update(pet);

    return PetMapper.toResponse(updated);
  }
}
