import { PaginatedResult } from '../../../../../common/interfaces/pagination.interface';
import { Pet } from '../entities/pet.entity';

export const PET_REPOSITORY = 'PET_REPOSITORY';

export interface PetFindAllParams {
  page?: number;
  limit?: number;
  search?: string;
}

export interface IPetRepository {
  create(pet: Pet): Promise<Pet>;
  update(pet: Pet): Promise<Pet>;
  delete(id: number): Promise<void>;
  findById(id: number): Promise<Pet | null>;
  findAll(params: PetFindAllParams): Promise<PaginatedResult<Pet>>;
}
