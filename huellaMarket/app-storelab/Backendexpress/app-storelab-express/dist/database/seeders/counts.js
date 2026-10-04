"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_SEED_COUNTS = void 0;
exports.resolveSeedCounts = resolveSeedCounts;
exports.DEFAULT_SEED_COUNTS = {
    clients: 10,
    pets: 10,
    healthRecords: 10,
    pet_services: 10,
};
function resolveSeedCounts(argv = process.argv.slice(2)) {
    const counts = { ...exports.DEFAULT_SEED_COUNTS };
    const envClients = process.env.SEED_CLIENTS;
    if (envClients !== undefined && envClients !== "") {
        counts.clients = Number(envClients);
    }
    const envPets = process.env.SEED_PETS;
    if (envPets !== undefined && envPets !== "") {
        counts.pets = Number(envPets);
    }
    const envHealthRecords = process.env.SEED_HEALTH_RECORDS;
    if (envHealthRecords !== undefined && envHealthRecords !== "") {
        counts.healthRecords = Number(envHealthRecords);
    }
    const envPetServices = process.env.SEED_PET_SERVICES;
    if (envPetServices !== undefined && envPetServices !== "") {
        counts.pet_services = Number(envPetServices);
    }
    for (const arg of argv) {
        const m = arg.match(/^--([a-zA-Z_]+)=(\d+)$/);
        if (!m)
            continue;
        const key = m[1];
        const value = Number(m[2]);
        if (key in counts) {
            counts[key] = value;
        }
    }
    return counts;
}
//# sourceMappingURL=counts.js.map