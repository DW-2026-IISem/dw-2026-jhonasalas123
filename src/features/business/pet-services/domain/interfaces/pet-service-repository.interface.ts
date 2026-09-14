import { PaginatedResult } from '../../../../../common/interfaces/pagination.interface';
import { PetService } from '../entities/pet-service.entity';

export const PET_SERVICE_REPOSITORY = 'PET_SERVICE_REPOSITORY';

export interface PetServiceFindAllParams {
  page?: number;
  limit?: number;
  search?: string;
}

export interface IPetServiceRepository {
  create(petService: PetService): Promise<PetService>;
  update(petService: PetService): Promise<PetService>;
  delete(id: number): Promise<void>;
  findById(id: number): Promise<PetService | null>;
  findAll(
    params: PetServiceFindAllParams,
  ): Promise<PaginatedResult<PetService>>;
}
