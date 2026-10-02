import { faker } from "@faker-js/faker";
import { HealthRecord } from "./health-record.model";

/**
 * Seeder del feature HealthRecord (datos falsos con @faker-js/faker).
 * Se invoca desde `src/database/seeders` (SeedersRunner), no desde la App.
 *
 * Idempotente: si ya hay filas, no vuelve a insertar.
 */
export async function seedHealthRecords(count: number): Promise<number> {
  if (count <= 0) {
    console.log("⏭️  health_records: count=0, se omite");
    return 0;
  }

  const existing = await HealthRecord.count();

  if (existing > 0) {
    console.log(
      `⏭️  health_records: ya hay ${existing} registro(s), se omite seeder`
    );
    return 0;
  }

  const rows = Array.from({ length: count }, () => ({
    nombre: faker.lorem.words({ min: 2, max: 5 }),
    descripcion: faker.lorem.sentence(),
    is_active: true,
  }));

  await HealthRecord.bulkCreate(rows);

  console.log(
    `✅ health_records: insertados ${count} registro(s) falsos`
  );

  return count;
}
