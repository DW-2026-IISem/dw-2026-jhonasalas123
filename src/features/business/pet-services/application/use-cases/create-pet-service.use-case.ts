import { Inject, Injectable } from '@nestjs/common';
import { PetService } from '../../domain/entities/pet-service.entity';
import {
  PET_SERVICE_REPOSITORY,
  type IPetServiceRepository,
} from '../../domain/interfaces/pet-service-repository.interface';
import { CreatePetServiceDto } from '../dto/create-pet-service.dto';
import { PetServiceMapper } from '../mappers/pet-service.mapper';

@Injectable()
export class CreatePetServiceUseCase {
  constructor(
    @Inject(PET_SERVICE_REPOSITORY)
    private readonly petServiceRepository: IPetServiceRepository,
  ) {}

  async execute(dto: CreatePetServiceDto) {
    const petService = PetService.create({
      nombre: dto.nombre,
      descripcion: dto.descripcion,
    });

    const created = await this.petServiceRepository.create(petService);

    return PetServiceMapper.toResponse(created);
  }
}
