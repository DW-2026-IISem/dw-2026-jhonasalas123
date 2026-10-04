"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedPayments = seedPayments;
const payment_model_1 = require("./payment.model");
async function seedPayments(count = 10) {
    const existing = await payment_model_1.Payment.count();
    if (existing > 0) {
        console.log(`Payment seeder: ${existing} registros ya existen.`);
        return;
    }
    const payments = Array.from({ length: count }, (_, index) => ({
        referencia_tipo: "venta",
        referencia_id: (index % 10) + 1,
        metodo: index % 2 === 0 ? "efectivo" : "tarjeta",
        monto: 59500 + index * 11900,
        fecha: new Date(),
        estado: "pagado",
    }));
    await payment_model_1.Payment.bulkCreate(payments);
    console.log(`Payment seeder: ${count} registros creados.`);
}
//# sourceMappingURL=payment.seeder.js.map