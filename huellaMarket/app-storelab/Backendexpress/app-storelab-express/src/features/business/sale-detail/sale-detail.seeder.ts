import { SaleDetail } from "./sale-detail.model";

export async function seedSaleDetails(count = 10): Promise<void> {
  const existing = await SaleDetail.count();

  if (existing > 0) {
    console.log(
      `SaleDetail seeder: ${existing} registros ya existen.`
    );
    return;
  }

  const saleDetails = Array.from(
    { length: count },
    (_, index) => ({
      cabecera_id: (index % 10) + 1,
      item_id: (index % 10) + 1,
      cantidad: index + 1,
      valor_unitario: 10000 + index * 1000,
      total: (index + 1) * (10000 + index * 1000),
      observaciones: `Detalle de venta ${index + 1}`,
    })
  );

  await SaleDetail.bulkCreate(saleDetails);

  console.log(
    `SaleDetail seeder: ${count} registros creados.`
  );
}
