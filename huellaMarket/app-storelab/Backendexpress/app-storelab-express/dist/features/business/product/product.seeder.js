"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedProducts = seedProducts;
const product_model_1 = require("./product.model");
async function seedProducts(count = 10) {
    const existing = await product_model_1.Product.count();
    if (existing > 0) {
        console.log(`Product seeder: ${existing} registros ya existen.`);
        return;
    }
    const products = Array.from({ length: count }, (_, index) => ({
        sku: `PROD-${String(index + 1).padStart(3, "0")}`,
        nombre: `Producto ${index + 1}`,
        descripcion: `Descripción del producto ${index + 1}`,
        precio: 10000 + index * 5000,
        isActive: true,
    }));
    await product_model_1.Product.bulkCreate(products);
    console.log(`Product seeder: ${count} registros creados.`);
}
//# sourceMappingURL=product.seeder.js.map