import { PaginatedResult } from '../../../../../common/interfaces/pagination.interface';
import { ServiceAppointment } from '../entities/service-appointment.entity';

export const SERVICE_APPOINTMENT_REPOSITORY =
  'SERVICE_APPOINTMENT_REPOSITORY';

export interface ServiceAppointmentFindAllParams {
  page?: number;
  limit?: number;
  search?: string;
}

export interface IServiceAppointmentRepository {
  create(appointment: ServiceAppointment): Promise<ServiceAppointment>;
  update(appointment: ServiceAppointment): Promise<ServiceAppointment>;
  delete(id: number): Promise<void>;
  findById(id: number): Promise<ServiceAppointment | null>;
  findAll(
    params: ServiceAppointmentFindAllParams,
  ): Promise<PaginatedResult<ServiceAppointment>>;
}
