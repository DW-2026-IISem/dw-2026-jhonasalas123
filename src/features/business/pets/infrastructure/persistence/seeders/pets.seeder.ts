import { PetModel } from '../models/pet.model';

export async function seedPets(): Promise<void> {
  const count = await PetModel.count();

  if (count > 0) {
    return;
  }

  await PetModel.bulkCreate([
    {
      nombre: 'Max',
      descripcion: 'Perro de compañía',
      isActive: true,
    },
    {
      nombre: 'Luna',
      descripcion: 'Gata doméstica',
      isActive: true,
    },
  ]);
}
