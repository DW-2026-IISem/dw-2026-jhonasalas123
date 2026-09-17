import { Inject, Injectable } from '@nestjs/common';
import { ServiceAppointmentNotFoundException } from '../../domain/exceptions/service-appointment-not-found.exception';
import {
  SERVICE_APPOINTMENT_REPOSITORY,
  type IServiceAppointmentRepository,
} from '../../domain/interfaces/service-appointment-repository.interface';

@Injectable()
export class DeleteServiceAppointmentUseCase {
  constructor(
    @Inject(SERVICE_APPOINTMENT_REPOSITORY)
    private readonly serviceAppointmentRepository: IServiceAppointmentRepository,
  ) {}

  async execute(id: number): Promise<void> {
    const appointment =
      await this.serviceAppointmentRepository.findById(id);

    if (!appointment) {
      throw new ServiceAppointmentNotFoundException(id);
    }

    await this.serviceAppointmentRepository.delete(id);
  }
}
