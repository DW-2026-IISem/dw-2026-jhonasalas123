import { faker } from "@faker-js/faker";
import { PetService } from "./pet-service.model";

/**
 * Seeder del feature PetService.
 * Se ejecuta desde `src/database/seeders` (SeedersRunner).
 *
 * Idempotente: si ya existen registros, no vuelve a insertar.
 */
export async function seedPetServices(count: number): Promise<number> {
  if (count <= 0) {
    console.log("⏭️  pet_services: count=0, se omite");
    return 0;
  }

  const existing = await PetService.count();

  if (existing > 0) {
    console.log(
      `⏭️  pet_services: ya hay ${existing} registro(s), se omite seeder`
    );
    return 0;
  }

  const serviceNames = [
    "Vacunación",
    "Peluquería",
    "Desparasitación",
    "Baño",
    "Corte de uñas",
    "Limpieza dental",
  ];

  const rows = Array.from({ length: count }, (_, i) => ({
    nombre: serviceNames[i % serviceNames.length],
    descripcion: faker.lorem.sentence(),
    isActive: true,
  }));

  await PetService.bulkCreate(rows);

  console.log(
    `✅ pet_services: insertados ${count} registro(s) falsos`
  );

  return count;
}
