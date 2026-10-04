"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceAppointmentController = void 0;
const service_appointment_model_1 = require("./service-appointment.model");
class ServiceAppointmentController {
    // ISS-03-B — GET /api/citas-servicio
    async getAll(req, res) {
        try {
            const service_appointments = await service_appointment_model_1.ServiceAppointment.findAll({
                where: { isActive: true },
            });
            res.status(200).json({ service_appointments });
        }
        catch (error) {
            res.status(500).json({
                error: "Error fetching service appointments",
                detail: String(error),
            });
        }
    }
    // ISS-03-B — GET /api/citas-servicio/:id
    async getOne(req, res) {
        try {
            const id = Number(req.params.id);
            const service_appointment = await service_appointment_model_1.ServiceAppointment.findByPk(id);
            if (!service_appointment) {
                res.status(404).json({
                    error: "Service appointment not found",
                });
                return;
            }
            res.status(200).json({ service_appointment });
        }
        catch (error) {
            res.status(500).json({
                error: "Error fetching service appointment",
                detail: String(error),
            });
        }
    }
    // ISS-03-C — POST /api/citas-servicio
    async create(req, res) {
        try {
            const body = req.body;
            const service_appointment = await service_appointment_model_1.ServiceAppointment.create({
                nombre: body.nombre,
                descripcion: body.descripcion ?? null,
                isActive: body.isActive ?? true,
            });
            res.status(201).json({ service_appointment });
        }
        catch (error) {
            res.status(500).json({
                error: "Error creating service appointment",
                detail: String(error),
            });
        }
    }
    // ISS-03-D — PUT /api/citas-servicio/:id
    async updatePut(req, res) {
        try {
            const id = Number(req.params.id);
            const service_appointment = await service_appointment_model_1.ServiceAppointment.findByPk(id);
            if (!service_appointment) {
                res.status(404).json({
                    error: "Service appointment not found",
                });
                return;
            }
            const body = req.body;
            await service_appointment.update({
                nombre: body.nombre,
                descripcion: body.descripcion ?? null,
                isActive: body.isActive ?? true,
            });
            res.status(200).json({ service_appointment });
        }
        catch (error) {
            res.status(500).json({
                error: "Error updating service appointment",
                detail: String(error),
            });
        }
    }
    // ISS-03-D — PATCH /api/citas-servicio/:id
    async updatePatch(req, res) {
        try {
            const id = Number(req.params.id);
            const service_appointment = await service_appointment_model_1.ServiceAppointment.findByPk(id);
            if (!service_appointment) {
                res.status(404).json({
                    error: "Service appointment not found",
                });
                return;
            }
            const body = req.body;
            await service_appointment.update(body);
            res.status(200).json({ service_appointment });
        }
        catch (error) {
            res.status(500).json({
                error: "Error patching service appointment",
                detail: String(error),
            });
        }
    }
    // ISS-03-E — DELETE físico /api/citas-servicio/:id
    async deletePhysical(req, res) {
        try {
            const id = Number(req.params.id);
            const service_appointment = await service_appointment_model_1.ServiceAppointment.findByPk(id);
            if (!service_appointment) {
                res.status(404).json({
                    error: "Service appointment not found",
                });
                return;
            }
            await service_appointment.destroy();
            res.status(200).json({
                message: "Service appointment deleted successfully",
            });
        }
        catch (error) {
            res.status(500).json({
                error: "Error deleting service appointment",
                detail: String(error),
            });
        }
    }
    // ISS-03-E — DELETE lógico /api/citas-servicio/:id/deactivate
    async deleteLogical(req, res) {
        try {
            const id = Number(req.params.id);
            const service_appointment = await service_appointment_model_1.ServiceAppointment.findByPk(id);
            if (!service_appointment) {
                res.status(404).json({
                    error: "Service appointment not found",
                });
                return;
            }
            await service_appointment.update({
                isActive: false,
            });
            res.status(200).json({
                message: "Service appointment deactivated successfully",
                service_appointment,
            });
        }
        catch (error) {
            res.status(500).json({
                error: "Error deactivating service appointment",
                detail: String(error),
            });
        }
    }
}
exports.ServiceAppointmentController = ServiceAppointmentController;
//# sourceMappingURL=service-appointment.controller.js.map