import { Product } from "./product.model";

export async function seedProducts(count = 10): Promise<void> {
  const existing = await Product.count();

  if (existing > 0) {
    console.log(
      `Product seeder: ${existing} registros ya existen.`
    );
    return;
  }

  const products = Array.from(
    { length: count },
    (_, index) => ({
      sku: `PROD-${String(index + 1).padStart(3, "0")}`,
      nombre: `Producto ${index + 1}`,
      descripcion: `Descripción del producto ${index + 1}`,
      precio: 10000 + index * 5000,
      isActive: true,
    })
  );

  await Product.bulkCreate(products);

  console.log(
    `Product seeder: ${count} registros creados.`
  );
}
