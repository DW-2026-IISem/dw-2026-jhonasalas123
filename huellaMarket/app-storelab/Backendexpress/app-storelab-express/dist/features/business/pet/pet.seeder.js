"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedPets = seedPets;
const pet_model_1 = require("./pet.model");
async function seedPets(count = 10) {
    const pets = [];
    for (let i = 1; i <= count; i++) {
        pets.push({
            name: `Mascota ${i}`,
            description: `Mascota de prueba ${i}`,
            is_active: true,
        });
    }
    await pet_model_1.Pet.bulkCreate(pets);
    console.log(`✅ ${count} mascotas creadas correctamente`);
}
//# sourceMappingURL=pet.seeder.js.map