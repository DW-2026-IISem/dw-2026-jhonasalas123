import { Inject, Injectable } from '@nestjs/common';
import {
  PET_SERVICE_REPOSITORY,
  type IPetServiceRepository,
} from '../../domain/interfaces/pet-service-repository.interface';
import { PetServiceFilterDto } from '../dto/pet-service-filter.dto';
import { PetServiceMapper } from '../mappers/pet-service.mapper';

@Injectable()
export class ListPetServicesUseCase {
  constructor(
    @Inject(PET_SERVICE_REPOSITORY)
    private readonly petServiceRepository: IPetServiceRepository,
  ) {}

  async execute(filter: PetServiceFilterDto) {
    const result = await this.petServiceRepository.findAll(filter);

    return {
      items: result.items.map((petService) =>
        PetServiceMapper.toResponse(petService),
      ),
      meta: result.meta,
    };
  }
}
