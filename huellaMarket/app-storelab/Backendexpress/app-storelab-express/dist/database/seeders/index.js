"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.runAllSeeders = runAllSeeders;
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = require("../db");
require("../../features/business/client/client.model");
const client_seeder_1 = require("../../features/business/client/client.seeder");
require("../../features/business/pet/pet.model");
const pet_seeder_1 = require("../../features/business/pet/pet.seeder");
require("../../features/business/health-record/health-record.model");
const health_record_seeder_1 = require("../../features/business/health-record/health-record.seeder");
require("../../features/business/pet-service/pet-service.model");
const pet_service_seeder_1 = require("../../features/business/pet-service/pet-service.seeder");
require("../../features/business/service-appointment/service-appointment.model");
const service_appointment_seeder_1 = require("../../features/business/service-appointment/service-appointment.seeder");
const counts_1 = require("./counts");
dotenv_1.default.config();
/**
 * SeedersRunner — ejecuta TODOS los seeders de features.
 *
 * Ubicación: `src/database/seeders/`
 */
async function runAllSeeders() {
    const counts = (0, counts_1.resolveSeedCounts)();
    console.log("🌱 Iniciando SeedersRunner...");
    console.log("📊 Conteos:", counts);
    const ok = await (0, db_1.testConnection)();
    if (!ok) {
        throw new Error("No hay conexión a la base de datos");
    }
    await db_1.sequelize.sync({ force: false, alter: true });
    // Orden: business (padres → hijos)
    await (0, client_seeder_1.seedClients)(counts.clients);
    await (0, pet_seeder_1.seedPets)(counts.pets);
    await (0, health_record_seeder_1.seedHealthRecords)(counts.healthRecords);
    await (0, pet_service_seeder_1.seedPetServices)(counts.pet_services);
    await (0, service_appointment_seeder_1.seedServiceAppointments)(counts.service_appointments);
    console.log("🌱 SeedersRunner finalizado");
}
if (require.main === module) {
    runAllSeeders()
        .then(async () => {
        await db_1.sequelize.close();
        process.exit(0);
    })
        .catch(async (err) => {
        console.error("❌ Error en seeders:", err);
        await db_1.sequelize.close();
        process.exit(1);
    });
}
//# sourceMappingURL=index.js.map