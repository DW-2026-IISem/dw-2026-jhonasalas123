import { ServiceAppointmentModel } from '../models/service-appointment.model';

export async function seedServiceAppointments(): Promise<void> {
  const count = await ServiceAppointmentModel.count();

  if (count > 0) {
    return;
  }

  await ServiceAppointmentModel.bulkCreate([
    {
      nombre: 'Cita de vacunación',
      descripcion: 'Cita para aplicación y registro de vacunas de la mascota',
      isActive: true,
    },
    {
      nombre: 'Cita de peluquería',
      descripcion: 'Cita para baño, corte y cuidado estético de la mascota',
      isActive: true,
    },
    {
      nombre: 'Cita de desparasitación',
      descripcion: 'Cita para control y prevención de parásitos',
      isActive: true,
    },
  ]);
}
