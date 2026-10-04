"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedSaleDetails = seedSaleDetails;
const sale_detail_model_1 = require("./sale-detail.model");
async function seedSaleDetails(count = 10) {
    const existing = await sale_detail_model_1.SaleDetail.count();
    if (existing > 0) {
        console.log(`SaleDetail seeder: ${existing} registros ya existen.`);
        return;
    }
    const saleDetails = Array.from({ length: count }, (_, index) => ({
        cabecera_id: (index % 10) + 1,
        item_id: (index % 10) + 1,
        cantidad: index + 1,
        valor_unitario: 10000 + index * 1000,
        total: (index + 1) * (10000 + index * 1000),
        observaciones: `Detalle de venta ${index + 1}`,
    }));
    await sale_detail_model_1.SaleDetail.bulkCreate(saleDetails);
    console.log(`SaleDetail seeder: ${count} registros creados.`);
}
//# sourceMappingURL=sale-detail.seeder.js.map