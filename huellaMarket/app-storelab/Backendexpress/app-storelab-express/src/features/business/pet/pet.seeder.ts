import { Pet } from "./pet.model";

export async function seedPets(count = 10) {
  const pets = [];

  for (let i = 1; i <= count; i++) {
    pets.push({
      name: `Mascota ${i}`,
      description: `Mascota de prueba ${i}`,
      is_active: true,
    });
  }

  await Pet.bulkCreate(pets);

  console.log(`✅ ${count} mascotas creadas correctamente`);
}
