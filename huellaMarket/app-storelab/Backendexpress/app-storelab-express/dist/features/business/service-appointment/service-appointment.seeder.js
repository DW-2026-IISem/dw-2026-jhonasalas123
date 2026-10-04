"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedServiceAppointments = seedServiceAppointments;
const service_appointment_model_1 = require("./service-appointment.model");
async function seedServiceAppointments(count = 10) {
    const existing = await service_appointment_model_1.ServiceAppointment.count();
    if (existing > 0) {
        console.log(`ServiceAppointment seeder: ${existing} registros ya existen.`);
        return;
    }
    const serviceAppointments = Array.from({ length: count }, (_, index) => ({
        nombre: `Cita de servicio ${index + 1}`,
        descripcion: `Descripción de la cita de servicio ${index + 1}`,
        isActive: true,
    }));
    await service_appointment_model_1.ServiceAppointment.bulkCreate(serviceAppointments);
    console.log(`ServiceAppointment seeder: ${count} registros creados.`);
}
//# sourceMappingURL=service-appointment.seeder.js.map