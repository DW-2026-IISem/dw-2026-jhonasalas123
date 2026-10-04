import { Provider } from "./provider.model";

export async function seedProviders(count = 10): Promise<void> {
  const existing = await Provider.count();

  if (existing > 0) {
    console.log(
      `Provider seeder: ${existing} registros ya existen.`
    );
    return;
  }

  const providers = Array.from(
    { length: count },
    (_, index) => ({
      nit: `NIT-${String(index + 1).padStart(3, "0")}`,
      razon_social: `Proveedor ${index + 1}`,
      contacto: `Contacto ${index + 1}`,
      telefono: `30000000${String(index + 1).padStart(2, "0")}`,
      email: `proveedor${index + 1}@example.com`,
      isActive: true,
    })
  );

  await Provider.bulkCreate(providers);

  console.log(
    `Provider seeder: ${count} registros creados.`
  );
}
