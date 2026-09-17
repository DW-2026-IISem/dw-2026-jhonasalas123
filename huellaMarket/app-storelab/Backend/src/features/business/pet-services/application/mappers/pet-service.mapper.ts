import { PetService } from '../../domain/entities/pet-service.entity';
import { PetServiceResponseDto } from '../dto/pet-service-response.dto';
import { PetServiceModel } from '../../infrastructure/persistence/models/pet-service.model';

export class PetServiceMapper {
  static toDomain(model: PetServiceModel): PetService {
    return PetService.reconstitute({
      id: model.id,
      nombre: model.nombre,
      descripcion: model.descripcion ?? undefined,
      isActive: model.isActive,
      createdAt: model.createdAt,
      updatedAt: model.updatedAt,
    });
  }

  static toResponse(entity: PetService): PetServiceResponseDto {
    return {
      id: entity.id!,
      nombre: entity.nombre,
      descripcion: entity.descripcion,
      isActive: entity.isActive,
      createdAt: entity.createdAt!,
      updatedAt: entity.updatedAt!,
    };
  }

  static toPersistence(
    entity: PetService,
  ): Partial<PetServiceModel> {
    return {
      id: entity.id,
      nombre: entity.nombre,
      descripcion: entity.descripcion ?? null,
      isActive: entity.isActive,
    };
  }
}
