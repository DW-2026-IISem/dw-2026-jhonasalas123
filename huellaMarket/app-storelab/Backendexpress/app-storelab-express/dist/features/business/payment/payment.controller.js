"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentController = void 0;
const payment_model_1 = require("./payment.model");
function paramId(req) {
    const raw = req.params.id;
    const value = Array.isArray(raw) ? raw[0] : raw;
    return Number(value);
}
class PaymentController {
    // GET ALL
    async getAll(req, res) {
        try {
            const payments = await payment_model_1.Payment.findAll();
            res.status(200).json({ payments });
        }
        catch (error) {
            res.status(500).json({
                error: "Error fetching payments",
                detail: String(error),
            });
        }
    }
    // GET ONE
    async getOne(req, res) {
        try {
            const id = paramId(req);
            const payment = await payment_model_1.Payment.findByPk(id);
            if (!payment) {
                res.status(404).json({
                    error: "Payment not found",
                });
                return;
            }
            res.status(200).json({ payment });
        }
        catch (error) {
            res.status(500).json({
                error: "Error fetching payment",
                detail: String(error),
            });
        }
    }
    // CREATE
    async create(req, res) {
        try {
            const body = req.body;
            const payment = await payment_model_1.Payment.create({
                referencia_tipo: body.referencia_tipo,
                referencia_id: body.referencia_id,
                metodo: body.metodo,
                monto: body.monto,
                fecha: body.fecha ?? new Date(),
                estado: body.estado ?? "pendiente",
            });
            res.status(201).json({ payment });
        }
        catch (error) {
            res.status(500).json({
                error: "Error creating payment",
                detail: String(error),
            });
        }
    }
    // PUT
    async updatePut(req, res) {
        try {
            const id = paramId(req);
            const payment = await payment_model_1.Payment.findByPk(id);
            if (!payment) {
                res.status(404).json({
                    error: "Payment not found",
                });
                return;
            }
            const body = req.body;
            await payment.update({
                referencia_tipo: body.referencia_tipo,
                referencia_id: body.referencia_id,
                metodo: body.metodo,
                monto: body.monto,
                fecha: body.fecha,
                estado: body.estado,
            });
            res.status(200).json({ payment });
        }
        catch (error) {
            res.status(500).json({
                error: "Error updating payment (PUT)",
                detail: String(error),
            });
        }
    }
    // PATCH
    async updatePatch(req, res) {
        try {
            const id = paramId(req);
            const payment = await payment_model_1.Payment.findByPk(id);
            if (!payment) {
                res.status(404).json({
                    error: "Payment not found",
                });
                return;
            }
            await payment.update(req.body);
            res.status(200).json({ payment });
        }
        catch (error) {
            res.status(500).json({
                error: "Error updating payment (PATCH)",
                detail: String(error),
            });
        }
    }
    // DELETE
    async deletePhysical(req, res) {
        try {
            const id = paramId(req);
            const payment = await payment_model_1.Payment.findByPk(id);
            if (!payment) {
                res.status(404).json({
                    error: "Payment not found",
                });
                return;
            }
            await payment.destroy();
            res.status(200).json({
                message: "Payment permanently deleted",
                id,
            });
        }
        catch (error) {
            res.status(500).json({
                error: "Error deleting payment",
                detail: String(error),
            });
        }
    }
}
exports.PaymentController = PaymentController;
//# sourceMappingURL=payment.controller.js.map