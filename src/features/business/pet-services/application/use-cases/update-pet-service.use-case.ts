import { Inject, Injectable } from '@nestjs/common';
import { PetServiceNotFoundException } from '../../domain/exceptions/pet-service-not-found.exception';
import {
  PET_SERVICE_REPOSITORY,
  type IPetServiceRepository,
} from '../../domain/interfaces/pet-service-repository.interface';
import { UpdatePetServiceDto } from '../dto/update-pet-service.dto';
import { PetServiceMapper } from '../mappers/pet-service.mapper';

@Injectable()
export class UpdatePetServiceUseCase {
  constructor(
    @Inject(PET_SERVICE_REPOSITORY)
    private readonly petServiceRepository: IPetServiceRepository,
  ) {}

  async execute(id: number, dto: UpdatePetServiceDto) {
    const petService = await this.petServiceRepository.findById(id);

    if (!petService) {
      throw new PetServiceNotFoundException(id);
    }

    petService.update({
      nombre: dto.nombre,
      descripcion: dto.descripcion,
    });

    const updated =
      await this.petServiceRepository.update(petService);

    return PetServiceMapper.toResponse(updated);
  }
}
