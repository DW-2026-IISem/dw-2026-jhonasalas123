"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedSales = seedSales;
const sale_model_1 = require("./sale.model");
async function seedSales(count = 10) {
    const existing = await sale_model_1.Sale.count();
    if (existing > 0) {
        console.log(`Sale seeder: ${existing} registros ya existen.`);
        return;
    }
    const sales = Array.from({ length: count }, (_, index) => ({
        cliente_id: (index % 10) + 1,
        fecha: new Date(),
        subtotal: 50000 + index * 10000,
        impuestos: 9500 + index * 1900,
        total: 59500 + index * 11900,
        estado: "pendiente",
    }));
    await sale_model_1.Sale.bulkCreate(sales);
    console.log(`Sale seeder: ${count} registros creados.`);
}
//# sourceMappingURL=sale.seeder.js.map