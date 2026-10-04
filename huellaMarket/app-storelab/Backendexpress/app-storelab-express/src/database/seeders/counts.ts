/**
 * Cantidad de registros por feature/entidad.
 *
 * Prioridad:
 * CLI > variables de entorno > valores por defecto.
 */
export type SeedCounts = {
  clients: number;
  pets: number;
  healthRecords: number;
  pet_services: number;
};

export const DEFAULT_SEED_COUNTS: SeedCounts = {
  clients: 10,
  pets: 10,
  healthRecords: 10,
  pet_services: 10,
};

export function resolveSeedCounts(
  argv: string[] = process.argv.slice(2)
): SeedCounts {
  const counts: SeedCounts = { ...DEFAULT_SEED_COUNTS };

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
    if (!m) continue;

    const key = m[1] as keyof SeedCounts;
    const value = Number(m[2]);

    if (key in counts) {
      counts[key] = value;
    }
  }

  return counts;
}
