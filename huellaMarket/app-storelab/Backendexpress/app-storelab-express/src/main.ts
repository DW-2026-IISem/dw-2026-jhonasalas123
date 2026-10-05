import { App } from "./config";

async function main(): Promise<void> {
  const app = new App();
  await app.listen();
}

main().catch((error) => {
  console.error("❌ Error al iniciar la aplicación:", error);
  process.exit(1);
});
