"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedPets = seedPets;
const pet_model_1 = require("./pet.model");
async function seedPets(count) {
    if (count <= 0) {
        console.log("⏭️  pets: count=0, se omite");
        return 0;
    }
    const existing = await pet_model_1.Pet.count();
    if (existing > 0) {
        console.log(`⏭️  pets: ya hay ${existing} registro(s), se omite seeder`);
        return 0;
    }
    const rows = Array.from({ length: count }, (_, i) => ({
        nombre: `Mascota ${i + 1}`,
        descripcion: `Mascota de prueba ${i + 1}`,
        isActive: true,
    }));
    await pet_model_1.Pet.bulkCreate(rows);
    console.log(`✅ pets: insertados ${count} registro(s)`);
    return count;
}
//# sourceMappingURL=pet.seeder.js.map