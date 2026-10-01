import { Pet } from "./pet.model";

/**
 * Seeder del feature Pet.
 * Se invoca desde `src/database/seeders` (SeedersRunner).
 *
 * Idempotente: si ya hay filas, no vuelve a insertar.
 */
export async function seedPets(count: number): Promise<number> {
  if (count <= 0) {
    console.log("⏭️  pets: count=0, se omite");
    return 0;
  }

  const existing = await Pet.count();

  if (existing > 0) {
    console.log(`⏭️  pets: ya hay ${existing} registro(s), se omite seeder`);
    return 0;
  }

  const rows = Array.from({ length: count }, (_, i) => ({
    nombre: `Mascota ${i + 1}`,
    descripcion: `Mascota de prueba ${i + 1}`,
    isActive: true,
  }));

  await Pet.bulkCreate(rows);

  console.log(`✅ pets: insertados ${count} registro(s)`);
  return count;
}
