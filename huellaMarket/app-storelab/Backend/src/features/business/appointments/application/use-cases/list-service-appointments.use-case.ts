import { Inject, Injectable } from '@nestjs/common';
import {
  SERVICE_APPOINTMENT_REPOSITORY,
  type IServiceAppointmentRepository,
} from '../../domain/interfaces/service-appointment-repository.interface';
import { ServiceAppointmentFilterDto } from '../dto/service-appointment-filter.dto';
import { ServiceAppointmentMapper } from '../mappers/service-appointment.mapper';

@Injectable()
export class ListServiceAppointmentsUseCase {
  constructor(
    @Inject(SERVICE_APPOINTMENT_REPOSITORY)
    private readonly serviceAppointmentRepository: IServiceAppointmentRepository,
  ) {}

  async execute(filter: ServiceAppointmentFilterDto) {
    const result =
      await this.serviceAppointmentRepository.findAll(filter);

    return {
      items: result.items.map((appointment) =>
        ServiceAppointmentMapper.toResponse(appointment),
      ),
      meta: result.meta,
    };
  }
}
