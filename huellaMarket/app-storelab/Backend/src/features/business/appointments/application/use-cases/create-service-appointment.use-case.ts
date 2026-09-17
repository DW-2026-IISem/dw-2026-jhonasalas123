import { Inject, Injectable } from '@nestjs/common';
import { ServiceAppointment } from '../../domain/entities/service-appointment.entity';
import {
  SERVICE_APPOINTMENT_REPOSITORY,
  type IServiceAppointmentRepository,
} from '../../domain/interfaces/service-appointment-repository.interface';
import { CreateServiceAppointmentDto } from '../dto/create-service-appointment.dto';
import { ServiceAppointmentMapper } from '../mappers/service-appointment.mapper';

@Injectable()
export class CreateServiceAppointmentUseCase {
  constructor(
    @Inject(SERVICE_APPOINTMENT_REPOSITORY)
    private readonly serviceAppointmentRepository: IServiceAppointmentRepository,
  ) {}

  async execute(dto: CreateServiceAppointmentDto) {
    const appointment = ServiceAppointment.create({
      nombre: dto.nombre,
      descripcion: dto.descripcion,
    });

    const created =
      await this.serviceAppointmentRepository.create(appointment);

    return ServiceAppointmentMapper.toResponse(created);
  }
}
