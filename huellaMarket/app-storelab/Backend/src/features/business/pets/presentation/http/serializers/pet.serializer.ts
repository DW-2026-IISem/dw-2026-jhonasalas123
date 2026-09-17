import { Pet } from '../../../domain/entities/pet.entity';
import { PetResponseDto } from '../../../application/dto/pet-response.dto';
import { PetMapper } from '../../../application/mappers/pet.mapper';

export class PetSerializer {
  static serialize(entity: Pet): PetResponseDto {
    return PetMapper.toResponse(entity);
  }
}
