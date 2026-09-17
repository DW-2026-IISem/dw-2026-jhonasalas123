import { Inject, Injectable } from '@nestjs/common';
import { Pet } from '../../domain/entities/pet.entity';
import {
  PET_REPOSITORY,
  type IPetRepository,
} from '../../domain/interfaces/pet-repository.interface';
import { CreatePetDto } from '../dto/create-pet.dto';
import { PetMapper } from '../mappers/pet.mapper';

@Injectable()
export class CreatePetUseCase {
  constructor(
    @Inject(PET_REPOSITORY)
    private readonly petRepository: IPetRepository,
  ) {}

  async execute(dto: CreatePetDto) {
    const pet = Pet.create({
      nombre: dto.nombre,
      descripcion: dto.descripcion,
    });

    const created = await this.petRepository.create(pet);
    return PetMapper.toResponse(created);
  }
}
