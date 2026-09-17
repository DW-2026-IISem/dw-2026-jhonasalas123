import { Inject, Injectable } from '@nestjs/common';
import { ServiceAppointmentNotFoundException } from '../../domain/exceptions/service-appointment-not-found.exception';
import {
  SERVICE_APPOINTMENT_REPOSITORY,
  type IServiceAppointmentRepository,
} from '../../domain/interfaces/service-appointment-repository.interface';
import { ServiceAppointmentMapper } from '../mappers/service-appointment.mapper';

@Injectable()
export class GetServiceAppointmentUseCase {
  constructor(
    @Inject(SERVICE_APPOINTMENT_REPOSITORY)
    private readonly serviceAppointmentRepository: IServiceAppointmentRepository,
  ) {}

  async execute(id: number) {
    const appointment =
      await this.serviceAppointmentRepository.findById(id);

    if (!appointment) {
      throw new ServiceAppointmentNotFoundException(id);
    }

    return ServiceAppointmentMapper.toResponse(appointment);
  }
}
