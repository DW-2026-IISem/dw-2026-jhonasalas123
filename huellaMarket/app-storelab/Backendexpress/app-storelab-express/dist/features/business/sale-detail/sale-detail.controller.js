"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaleDetailController = void 0;
const sale_detail_model_1 = require("./sale-detail.model");
function paramId(req) {
    const raw = req.params.id;
    const value = Array.isArray(raw) ? raw[0] : raw;
    return Number(value);
}
class SaleDetailController {
    // GET ALL
    async getAll(req, res) {
        try {
            const saleDetails = await sale_detail_model_1.SaleDetail.findAll();
            res.status(200).json({ saleDetails });
        }
        catch (error) {
            res.status(500).json({
                error: "Error fetching sale details",
                detail: String(error),
            });
        }
    }
    // GET ONE
    async getOne(req, res) {
        try {
            const id = paramId(req);
            const saleDetail = await sale_detail_model_1.SaleDetail.findByPk(id);
            if (!saleDetail) {
                res.status(404).json({ error: "Sale detail not found" });
                return;
            }
            res.status(200).json({ saleDetail });
        }
        catch (error) {
            res.status(500).json({
                error: "Error fetching sale detail",
                detail: String(error),
            });
        }
    }
    // CREATE
    async create(req, res) {
        try {
            const body = req.body;
            const saleDetail = await sale_detail_model_1.SaleDetail.create({
                cabecera_id: body.cabecera_id,
                item_id: body.item_id,
                cantidad: body.cantidad,
                valor_unitario: body.valor_unitario,
                total: body.total,
                observaciones: body.observaciones,
            });
            res.status(201).json({ saleDetail });
        }
        catch (error) {
            res.status(500).json({
                error: "Error creating sale detail",
                detail: String(error),
            });
        }
    }
    // PUT
    async updatePut(req, res) {
        try {
            const id = paramId(req);
            const saleDetail = await sale_detail_model_1.SaleDetail.findByPk(id);
            if (!saleDetail) {
                res.status(404).json({ error: "Sale detail not found" });
                return;
            }
            const body = req.body;
            await saleDetail.update({
                cabecera_id: body.cabecera_id,
                item_id: body.item_id,
                cantidad: body.cantidad,
                valor_unitario: body.valor_unitario,
                total: body.total,
                observaciones: body.observaciones,
            });
            res.status(200).json({ saleDetail });
        }
        catch (error) {
            res.status(500).json({
                error: "Error updating sale detail (PUT)",
                detail: String(error),
            });
        }
    }
    // PATCH
    async updatePatch(req, res) {
        try {
            const id = paramId(req);
            const saleDetail = await sale_detail_model_1.SaleDetail.findByPk(id);
            if (!saleDetail) {
                res.status(404).json({ error: "Sale detail not found" });
                return;
            }
            await saleDetail.update(req.body);
            res.status(200).json({ saleDetail });
        }
        catch (error) {
            res.status(500).json({
                error: "Error updating sale detail (PATCH)",
                detail: String(error),
            });
        }
    }
    // DELETE
    async deletePhysical(req, res) {
        try {
            const id = paramId(req);
            const saleDetail = await sale_detail_model_1.SaleDetail.findByPk(id);
            if (!saleDetail) {
                res.status(404).json({ error: "Sale detail not found" });
                return;
            }
            await saleDetail.destroy();
            res.status(200).json({
                message: "Sale detail permanently deleted",
                id,
            });
        }
        catch (error) {
            res.status(500).json({
                error: "Error deleting sale detail",
                detail: String(error),
            });
        }
    }
}
exports.SaleDetailController = SaleDetailController;
//# sourceMappingURL=sale-detail.controller.js.map