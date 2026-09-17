import { ServiceAppointment } from '../../../domain/entities/service-appointment.entity';
import { ServiceAppointmentResponseDto } from '../../../application/dto/service-appointment-response.dto';
import { ServiceAppointmentMapper } from '../../../application/mappers/service-appointment.mapper';

export class ServiceAppointmentSerializer {
  static serialize(
    entity: ServiceAppointment,
  ): ServiceAppointmentResponseDto {
    return ServiceAppointmentMapper.toResponse(entity);
  }
}
