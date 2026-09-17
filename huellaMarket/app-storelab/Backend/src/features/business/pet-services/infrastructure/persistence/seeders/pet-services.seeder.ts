import { PetServiceModel } from '../models/pet-service.model';

export async function seedPetServices(): Promise<void> {
  const count = await PetServiceModel.count();

  if (count > 0) {
    return;
  }

  await PetServiceModel.bulkCreate([
    {
      nombre: 'Vacunación',
      descripcion: 'Servicio de aplicación y registro de vacunas para mascotas',
      isActive: true,
    },
    {
      nombre: 'Peluquería',
      descripcion: 'Servicio de baño, corte y cuidado estético de mascotas',
      isActive: true,
    },
    {
      nombre: 'Desparasitación',
      descripcion: 'Servicio de control y prevención de parásitos en mascotas',
      isActive: true,
    },
  ]);
}
