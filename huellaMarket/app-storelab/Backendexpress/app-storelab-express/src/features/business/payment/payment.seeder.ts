import { Payment } from "./payment.model";

export async function seedPayments(count = 10): Promise<void> {
  const existing = await Payment.count();

  if (existing > 0) {
    console.log(
      `Payment seeder: ${existing} registros ya existen.`
    );
    return;
  }

  const payments = Array.from(
    { length: count },
    (_, index) => ({
      referencia_tipo: "venta",
      referencia_id: (index % 10) + 1,
      metodo: index % 2 === 0 ? "efectivo" : "tarjeta",
      monto: 59500 + index * 11900,
      fecha: new Date(),
      estado: "pagado",
    })
  );

  await Payment.bulkCreate(payments);

  console.log(
    `Payment seeder: ${count} registros creados.`
  );
}
