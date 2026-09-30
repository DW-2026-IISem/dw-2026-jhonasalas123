export function resolveSeedCounts() {
  return {
    clients: Number(process.env.SEED_CLIENTS ?? 10),
    pets: Number(process.env.SEED_PETS ?? 10),
  };
}
