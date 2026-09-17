import { Module } from '@nestjs/common';
import { SERVICE_APPOINTMENT_REPOSITORY } from './domain/interfaces/service-appointment-repository.interface';
import { ServiceAppointmentRepository } from './infrastructure/persistence/repositories/service-appointment.repository';
import { CreateServiceAppointmentUseCase } from './application/use-cases/create-service-appointment.use-case';
import { UpdateServiceAppointmentUseCase } from './application/use-cases/update-service-appointment.use-case';
import { DeleteServiceAppointmentUseCase } from './application/use-cases/delete-service-appointment.use-case';
import { GetServiceAppointmentUseCase } from './application/use-cases/get-service-appointment.use-case';
import { ListServiceAppointmentsUseCase } from './application/use-cases/list-service-appointments.use-case';
import { ServiceAppointmentsController } from './presentation/http/controllers/service-appointments.controller';

@Module({
  controllers: [ServiceAppointmentsController],
  providers: [
    ServiceAppointmentRepository,
    {
      provide: SERVICE_APPOINTMENT_REPOSITORY,
      useExisting: ServiceAppointmentRepository,
    },
    CreateServiceAppointmentUseCase,
    UpdateServiceAppointmentUseCase,
    DeleteServiceAppointmentUseCase,
    GetServiceAppointmentUseCase,
    ListServiceAppointmentsUseCase,
  ],
  exports: [SERVICE_APPOINTMENT_REPOSITORY],
})
export class ServiceAppointmentsModule {}
