import { Sale } from "./sale.model";

export async function seedSales(count = 10): Promise<void> {
  const existing = await Sale.count();

  if (existing > 0) {
    console.log(
      `Sale seeder: ${existing} registros ya existen.`
    );
    return;
  }

  const sales = Array.from(
    { length: count },
    (_, index) => ({
      cliente_id: (index % 10) + 1,
      fecha: new Date(),
      subtotal: 50000 + index * 10000,
      impuestos: 9500 + index * 1900,
      total: 59500 + index * 11900,
      estado: "pendiente",
    })
  );

  await Sale.bulkCreate(sales);

  console.log(
    `Sale seeder: ${count} registros creados.`
  );
}
