"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaleController = void 0;
const sale_model_1 = require("./sale.model");
function paramId(req) {
    const raw = req.params.id;
    const value = Array.isArray(raw) ? raw[0] : raw;
    return Number(value);
}
class SaleController {
    // ================== READ ==================
    // ISS-03-B — GET /api/ventas
    async getAll(req, res) {
        try {
            const sales = await sale_model_1.Sale.findAll();
            res.status(200).json({ sales });
        }
        catch (error) {
            res.status(500).json({
                error: "Error fetching sales",
                detail: String(error),
            });
        }
    }
    // ISS-03-B — GET /api/ventas/:id
    async getOne(req, res) {
        try {
            const id = paramId(req);
            const sale = await sale_model_1.Sale.findByPk(id);
            if (!sale) {
                res.status(404).json({
                    error: "Sale not found",
                });
                return;
            }
            res.status(200).json({ sale });
        }
        catch (error) {
            res.status(500).json({
                error: "Error fetching sale",
                detail: String(error),
            });
        }
    }
    // ================== CREATE ==================
    // ISS-03-C — POST /api/ventas
    async create(req, res) {
        try {
            const body = req.body;
            const sale = await sale_model_1.Sale.create({
                cliente_id: body.cliente_id,
                fecha: body.fecha ?? new Date(),
                subtotal: body.subtotal ?? 0,
                impuestos: body.impuestos ?? 0,
                total: body.total ?? 0,
                estado: body.estado ?? "pendiente",
            });
            res.status(201).json({ sale });
        }
        catch (error) {
            res.status(500).json({
                error: "Error creating sale",
                detail: String(error),
            });
        }
    }
    // ================== UPDATE ==================
    // ISS-03-D — PUT /api/ventas/:id
    async updatePut(req, res) {
        try {
            const id = paramId(req);
            const sale = await sale_model_1.Sale.findByPk(id);
            if (!sale) {
                res.status(404).json({
                    error: "Sale not found",
                });
                return;
            }
            const body = req.body;
            await sale.update({
                cliente_id: body.cliente_id,
                fecha: body.fecha,
                subtotal: body.subtotal,
                impuestos: body.impuestos,
                total: body.total,
                estado: body.estado,
            });
            res.status(200).json({ sale });
        }
        catch (error) {
            res.status(500).json({
                error: "Error updating sale (PUT)",
                detail: String(error),
            });
        }
    }
    // ISS-03-D — PATCH /api/ventas/:id
    async updatePatch(req, res) {
        try {
            const id = paramId(req);
            const sale = await sale_model_1.Sale.findByPk(id);
            if (!sale) {
                res.status(404).json({
                    error: "Sale not found",
                });
                return;
            }
            const body = req.body;
            await sale.update(body);
            res.status(200).json({ sale });
        }
        catch (error) {
            res.status(500).json({
                error: "Error updating sale (PATCH)",
                detail: String(error),
            });
        }
    }
    // ================== DELETE ==================
    // ISS-03-E — DELETE /api/ventas/:id
    async deletePhysical(req, res) {
        try {
            const id = paramId(req);
            const sale = await sale_model_1.Sale.findByPk(id);
            if (!sale) {
                res.status(404).json({
                    error: "Sale not found",
                });
                return;
            }
            await sale.destroy();
            res.status(200).json({
                message: "Sale permanently deleted",
                id,
            });
        }
        catch (error) {
            res.status(500).json({
                error: "Error deleting sale",
                detail: String(error),
            });
        }
    }
}
exports.SaleController = SaleController;
//# sourceMappingURL=sale.controller.js.map