export function resolveSeedCounts() {
  return {
    clients: Number(process.env.SEED_CLIENTS ?? 10),
  };
}
