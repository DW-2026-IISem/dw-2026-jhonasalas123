import { Inventory } from "./inventory.model";

export async function seedInventories(count = 10): Promise<void> {
  const existing = await Inventory.count();

  if (existing > 0) {
    console.log(
      `Inventory seeder: ${existing} registros ya existen.`
    );
    return;
  }

  const inventories = Array.from(
    { length: count },
    (_, index) => ({
      ubicacion_id: 1,
      item_id: index + 1,
      cantidad: 100 - index * 5,
      stock_minimo: 10,
    })
  );

  await Inventory.bulkCreate(inventories);

  console.log(
    `Inventory seeder: ${count} registros creados.`
  );
}
