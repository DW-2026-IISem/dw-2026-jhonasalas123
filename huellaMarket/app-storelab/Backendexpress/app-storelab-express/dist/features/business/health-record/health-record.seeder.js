"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedHealthRecords = seedHealthRecords;
const faker_1 = require("@faker-js/faker");
const health_record_model_1 = require("./health-record.model");
/**
 * Seeder del feature HealthRecord (datos falsos con @faker-js/faker).
 * Se invoca desde `src/database/seeders` (SeedersRunner), no desde la App.
 *
 * Idempotente: si ya hay filas, no vuelve a insertar.
 */
async function seedHealthRecords(count) {
    if (count <= 0) {
        console.log("⏭️  health_records: count=0, se omite");
        return 0;
    }
    const existing = await health_record_model_1.HealthRecord.count();
    if (existing > 0) {
        console.log(`⏭️  health_records: ya hay ${existing} registro(s), se omite seeder`);
        return 0;
    }
    const rows = Array.from({ length: count }, () => ({
        nombre: faker_1.faker.lorem.words({ min: 2, max: 5 }),
        descripcion: faker_1.faker.lorem.sentence(),
        is_active: true,
    }));
    await health_record_model_1.HealthRecord.bulkCreate(rows);
    console.log(`✅ health_records: insertados ${count} registro(s) falsos`);
    return count;
}
//# sourceMappingURL=health-record.seeder.js.map