import { PetService } from '../../../domain/entities/pet-service.entity';
import { PetServiceResponseDto } from '../../../application/dto/pet-service-response.dto';
import { PetServiceMapper } from '../../../application/mappers/pet-service.mapper';

export class PetServiceSerializer {
  static serialize(entity: PetService): PetServiceResponseDto {
    return PetServiceMapper.toResponse(entity);
  }
}
