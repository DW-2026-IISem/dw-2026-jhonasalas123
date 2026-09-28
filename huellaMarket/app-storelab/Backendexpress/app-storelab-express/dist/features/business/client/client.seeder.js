"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedClients = seedClients;
const faker_1 = require("@faker-js/faker");
const client_model_1 = require("./client.model");
/**
 * Seeder del feature Client.
 * Genera datos falsos con @faker-js/faker.
 *
 * Idempotente: si ya existen clientes, no vuelve a insertar.
 */
async function seedClients(count) {
    if (count <= 0) {
        console.log("⏭️  clients: count=0, se omite");
        return 0;
    }
    const existing = await client_model_1.Client.count();
    if (existing > 0) {
        console.log(`⏭️  clients: ya hay ${existing} registro(s), se omite seeder`);
        return 0;
    }
    const rows = Array.from({ length: count }, () => ({
        tipo_documento: "CC",
        numero_documento: faker_1.faker.string.numeric(10),
        nombre: faker_1.faker.person.fullName(),
        telefono: faker_1.faker.phone.number({ style: "national" }),
        email: faker_1.faker.internet.email().toLowerCase(),
        is_active: true,
    }));
    await client_model_1.Client.bulkCreate(rows);
    console.log(`✅ clients: insertados ${count} registro(s) falsos`);
    return count;
}
//# sourceMappingURL=client.seeder.js.map