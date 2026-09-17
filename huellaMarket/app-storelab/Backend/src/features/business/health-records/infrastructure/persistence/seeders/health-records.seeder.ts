import { HealthRecordModel } from '../models/health-record.model';

export async function seedHealthRecords(): Promise<void> {
  const count = await HealthRecordModel.count();

  if (count > 0) {
    return;
  }

  await HealthRecordModel.bulkCreate([
    {
      nombre: 'Ficha sanitaria básica',
      descripcion: 'Registro sanitario general de la mascota',
      isActive: true,
    },
    {
      nombre: 'Ficha de vacunación',
      descripcion: 'Registro de vacunas y controles sanitarios',
      isActive: true,
    },
  ]);
}
