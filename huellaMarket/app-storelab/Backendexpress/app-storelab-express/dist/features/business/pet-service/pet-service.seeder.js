"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedPetServices = seedPetServices;
const faker_1 = require("@faker-js/faker");
const pet_service_model_1 = require("./pet-service.model");
/**
 * Seeder del feature PetService.
 * Se ejecuta desde `src/database/seeders` (SeedersRunner).
 *
 * Idempotente: si ya existen registros, no vuelve a insertar.
 */
async function seedPetServices(count) {
    if (count <= 0) {
        console.log("⏭️  pet_services: count=0, se omite");
        return 0;
    }
    const existing = await pet_service_model_1.PetService.count();
    if (existing > 0) {
        console.log(`⏭️  pet_services: ya hay ${existing} registro(s), se omite seeder`);
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
        descripcion: faker_1.faker.lorem.sentence(),
        isActive: true,
    }));
    await pet_service_model_1.PetService.bulkCreate(rows);
    console.log(`✅ pet_services: insertados ${count} registro(s) falsos`);
    return count;
}
//# sourceMappingURL=pet-service.seeder.js.map