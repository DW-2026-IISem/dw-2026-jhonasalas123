import { ServiceAppointment } from "./service-appointment.model";

export async function seedServiceAppointments(
  count = 10
): Promise<void> {
  const existing = await ServiceAppointment.count();

  if (existing > 0) {
    console.log(
      `ServiceAppointment seeder: ${existing} registros ya existen.`
    );
    return;
  }

  const serviceAppointments = Array.from(
    { length: count },
    (_, index) => ({
      nombre: `Cita de servicio ${index + 1}`,
      descripcion: `Descripción de la cita de servicio ${index + 1}`,
      isActive: true,
    })
  );

  await ServiceAppointment.bulkCreate(serviceAppointments);

  console.log(
    `ServiceAppointment seeder: ${count} registros creados.`
  );
}
