import { Pet } from '../../domain/entities/pet.entity';
import { PetResponseDto } from '../dto/pet-response.dto';
import { PetModel } from '../../infrastructure/persistence/models/pet.model';

export class PetMapper {
  static toDomain(model: PetModel): Pet {
    return Pet.reconstitute({
      id: model.id,
      nombre: model.nombre,
      descripcion: model.descripcion ?? undefined,
      isActive: model.isActive,
      createdAt: model.createdAt,
      updatedAt: model.updatedAt,
    });
  }

  static toResponse(entity: Pet): PetResponseDto {
    return {
      id: entity.id!,
      nombre: entity.nombre,
      descripcion: entity.descripcion,
      isActive: entity.isActive,
      createdAt: entity.createdAt!,
      updatedAt: entity.updatedAt!,
    };
  }

  static toPersistence(entity: Pet): Partial<PetModel> {
    return {
      id: entity.id,
      nombre: entity.nombre,
      descripcion: entity.descripcion ?? null,
      isActive: entity.isActive,
    };
  }
}
