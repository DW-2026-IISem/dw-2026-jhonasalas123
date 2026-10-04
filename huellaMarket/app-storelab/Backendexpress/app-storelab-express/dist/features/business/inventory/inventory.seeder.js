"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedInventories = seedInventories;
const inventory_model_1 = require("./inventory.model");
async function seedInventories(count = 10) {
    const existing = await inventory_model_1.Inventory.count();
    if (existing > 0) {
        console.log(`Inventory seeder: ${existing} registros ya existen.`);
        return;
    }
    const inventories = Array.from({ length: count }, (_, index) => ({
        ubicacion_id: 1,
        item_id: index + 1,
        cantidad: 100 - index * 5,
        stock_minimo: 10,
    }));
    await inventory_model_1.Inventory.bulkCreate(inventories);
    console.log(`Inventory seeder: ${count} registros creados.`);
}
//# sourceMappingURL=inventory.seeder.js.map