import { Inject, Injectable } from '@nestjs/common';
import { ServiceAppointmentNotFoundException } from '../../domain/exceptions/service-appointment-not-found.exception';
import {
  SERVICE_APPOINTMENT_REPOSITORY,
  type IServiceAppointmentRepository,
} from '../../domain/interfaces/service-appointment-repository.interface';
import { UpdateServiceAppointmentDto } from '../dto/update-service-appointment.dto';
import { ServiceAppointmentMapper } from '../mappers/service-appointment.mapper';

@Injectable()
export class UpdateServiceAppointmentUseCase {
  constructor(
    @Inject(SERVICE_APPOINTMENT_REPOSITORY)
    private readonly serviceAppointmentRepository: IServiceAppointmentRepository,
  ) {}

  async execute(id: number, dto: UpdateServiceAppointmentDto) {
    const appointment =
      await this.serviceAppointmentRepository.findById(id);

    if (!appointment) {
      throw new ServiceAppointmentNotFoundException(id);
    }

    appointment.update({
      nombre: dto.nombre,
      descripcion: dto.descripcion,
    });

    const updated =
      await this.serviceAppointmentRepository.update(appointment);

    return ServiceAppointmentMapper.toResponse(updated);
  }
}
