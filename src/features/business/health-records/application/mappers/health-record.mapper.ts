import { HealthRecord } from '../../domain/entities/health-record.entity';
import { HealthRecordResponseDto } from '../dto/health-record-response.dto';
import { HealthRecordModel } from '../../infrastructure/persistence/models/health-record.model';

export class HealthRecordMapper {
  static toDomain(model: HealthRecordModel): HealthRecord {
    return HealthRecord.reconstitute({
      id: model.id,
      nombre: model.nombre,
      descripcion: model.descripcion ?? undefined,
      isActive: model.isActive,
      createdAt: model.createdAt,
      updatedAt: model.updatedAt,
    });
  }

  static toResponse(entity: HealthRecord): HealthRecordResponseDto {
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
    entity: HealthRecord,
  ): Partial<HealthRecordModel> {
    return {
      id: entity.id,
      nombre: entity.nombre,
      descripcion: entity.descripcion ?? null,
      isActive: entity.isActive,
    };
  }
}
