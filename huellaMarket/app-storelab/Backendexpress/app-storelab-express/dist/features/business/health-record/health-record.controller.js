"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HealthRecordController = void 0;
const health_record_model_1 = require("./health-record.model");
function paramId(req) {
    const raw = req.params.id;
    const value = Array.isArray(raw) ? raw[0] : raw;
    return Number(value);
}
class HealthRecordController {
    // ================== READ ==================
    async getAll(req, res) {
        try {
            const health_records = await health_record_model_1.HealthRecord.findAll({
                where: { is_active: true },
            });
            res.status(200).json({ health_records });
        }
        catch (error) {
            res.status(500).json({
                error: "Error fetching health records",
                detail: String(error),
            });
        }
    }
    async getOne(req, res) {
        try {
            const id = paramId(req);
            const health_record = await health_record_model_1.HealthRecord.findByPk(id);
            if (!health_record) {
                res.status(404).json({ error: "Health record not found" });
                return;
            }
            res.status(200).json({ health_record });
        }
        catch (error) {
            res.status(500).json({
                error: "Error fetching health record",
                detail: String(error),
            });
        }
    }
    // ================== CREATE ==================
    async create(req, res) {
        try {
            const body = req.body;
            const health_record = await health_record_model_1.HealthRecord.create({
                nombre: body.nombre,
                descripcion: body.descripcion ?? null,
                is_active: body.is_active ?? true,
            });
            res.status(201).json({ health_record });
        }
        catch (error) {
            res.status(500).json({
                error: "Error creating health record",
                detail: String(error),
            });
        }
    }
    // ================== UPDATE ==================
    async updatePut(req, res) {
        try {
            const id = paramId(req);
            const body = req.body;
            const health_record = await health_record_model_1.HealthRecord.findByPk(id);
            if (!health_record) {
                res.status(404).json({ error: "Health record not found" });
                return;
            }
            await health_record.update({
                nombre: body.nombre,
                descripcion: body.descripcion ?? null,
                is_active: body.is_active ?? health_record.is_active,
            });
            res.status(200).json({ health_record });
        }
        catch (error) {
            res.status(500).json({
                error: "Error updating health record (PUT)",
                detail: String(error),
            });
        }
    }
    async updatePatch(req, res) {
        try {
            const id = paramId(req);
            const body = req.body;
            const health_record = await health_record_model_1.HealthRecord.findByPk(id);
            if (!health_record) {
                res.status(404).json({ error: "Health record not found" });
                return;
            }
            await health_record.update(body);
            res.status(200).json({ health_record });
        }
        catch (error) {
            res.status(500).json({
                error: "Error updating health record (PATCH)",
                detail: String(error),
            });
        }
    }
    // ================== DELETE ==================
    /** Eliminación física */
    async deletePhysical(req, res) {
        try {
            const id = paramId(req);
            const health_record = await health_record_model_1.HealthRecord.findByPk(id);
            if (!health_record) {
                res.status(404).json({ error: "Health record not found" });
                return;
            }
            await health_record.destroy();
            res.status(200).json({
                message: "Health record permanently deleted",
                id,
            });
        }
        catch (error) {
            res.status(500).json({
                error: "Error deleting health record",
                detail: String(error),
            });
        }
    }
    /** Eliminación lógica → is_active = false */
    async deleteLogical(req, res) {
        try {
            const id = paramId(req);
            const health_record = await health_record_model_1.HealthRecord.findByPk(id);
            if (!health_record) {
                res.status(404).json({ error: "Health record not found" });
                return;
            }
            await health_record.update({ is_active: false });
            res.status(200).json({
                message: "Health record deactivated (logical delete)",
                health_record,
            });
        }
        catch (error) {
            res.status(500).json({
                error: "Error deactivating health record",
                detail: String(error),
            });
        }
    }
}
exports.HealthRecordController = HealthRecordController;
//# sourceMappingURL=health-record.controller.js.map