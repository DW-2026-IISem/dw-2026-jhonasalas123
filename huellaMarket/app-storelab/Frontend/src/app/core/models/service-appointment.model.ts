export interface ServiceAppointment {
  id: number;
  nombre: string;
  descripcion: string | null;
  isActive: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface ServiceAppointmentResponse {
  service_appointment: ServiceAppointment;
}

export interface ServiceAppointmentsResponse {
  service_appointments: ServiceAppointment[];
}
