import { ServiceAppointment } from '../../domain/entities/service-appointment.entity';
import { ServiceAppointmentResponseDto } from '../dto/service-appointment-response.dto';
import { ServiceAppointmentModel } from '../../infrastructure/persistence/models/service-appointment.model';

export class ServiceAppointmentMapper {
  static toDomain(model: ServiceAppointmentModel): ServiceAppointment {
    return ServiceAppointment.reconstitute({
      id: model.id,
      nombre: model.nombre,
      descripcion: model.descripcion ?? undefined,
      isActive: model.isActive,
      createdAt: model.createdAt,
      updatedAt: model.updatedAt,
    });
  }

  static toResponse(
    entity: ServiceAppointment,
  ): ServiceAppointmentResponseDto {
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
    entity: ServiceAppointment,
  ): Partial<ServiceAppointmentModel> {
    return {
      id: entity.id,
      nombre: entity.nombre,
      descripcion: entity.descripcion ?? null,
      isActive: entity.isActive,
    };
  }
}
