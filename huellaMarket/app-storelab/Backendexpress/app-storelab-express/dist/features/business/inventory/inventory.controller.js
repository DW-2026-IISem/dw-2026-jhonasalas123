"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryController = void 0;
const inventory_model_1 = require("./inventory.model");
function paramId(req) {
    const raw = req.params.id;
    const value = Array.isArray(raw) ? raw[0] : raw;
    return Number(value);
}
class InventoryController {
    // ================== READ ==================
    // ISS-03-B — GET /api/inventarios
    async getAll(req, res) {
        try {
            const inventories = await inventory_model_1.Inventory.findAll();
            res.status(200).json({ inventories });
        }
        catch (error) {
            res.status(500).json({
                error: "Error fetching inventories",
                detail: String(error),
            });
        }
    }
    // ISS-03-B — GET /api/inventarios/:id
    async getOne(req, res) {
        try {
            const id = paramId(req);
            const inventory = await inventory_model_1.Inventory.findByPk(id);
            if (!inventory) {
                res.status(404).json({
                    error: "Inventory not found",
                });
                return;
            }
            res.status(200).json({ inventory });
        }
        catch (error) {
            res.status(500).json({
                error: "Error fetching inventory",
                detail: String(error),
            });
        }
    }
    // ================== CREATE ==================
    // ISS-03-C — POST /api/inventarios
    async create(req, res) {
        try {
            const body = req.body;
            const inventory = await inventory_model_1.Inventory.create({
                ubicacion_id: body.ubicacion_id,
                item_id: body.item_id,
                cantidad: body.cantidad,
                stock_minimo: body.stock_minimo,
            });
            res.status(201).json({ inventory });
        }
        catch (error) {
            res.status(500).json({
                error: "Error creating inventory",
                detail: String(error),
            });
        }
    }
    // ================== UPDATE ==================
    // ISS-03-D — PUT /api/inventarios/:id
    async updatePut(req, res) {
        try {
            const id = paramId(req);
            const inventory = await inventory_model_1.Inventory.findByPk(id);
            if (!inventory) {
                res.status(404).json({
                    error: "Inventory not found",
                });
                return;
            }
            const body = req.body;
            await inventory.update({
                ubicacion_id: body.ubicacion_id,
                item_id: body.item_id,
                cantidad: body.cantidad,
                stock_minimo: body.stock_minimo,
            });
            res.status(200).json({ inventory });
        }
        catch (error) {
            res.status(500).json({
                error: "Error updating inventory (PUT)",
                detail: String(error),
            });
        }
    }
    // ISS-03-D — PATCH /api/inventarios/:id
    async updatePatch(req, res) {
        try {
            const id = paramId(req);
            const inventory = await inventory_model_1.Inventory.findByPk(id);
            if (!inventory) {
                res.status(404).json({
                    error: "Inventory not found",
                });
                return;
            }
            const body = req.body;
            await inventory.update(body);
            res.status(200).json({ inventory });
        }
        catch (error) {
            res.status(500).json({
                error: "Error updating inventory (PATCH)",
                detail: String(error),
            });
        }
    }
    // ================== DELETE ==================
    // ISS-03-E — DELETE /api/inventarios/:id
    async deletePhysical(req, res) {
        try {
            const id = paramId(req);
            const inventory = await inventory_model_1.Inventory.findByPk(id);
            if (!inventory) {
                res.status(404).json({
                    error: "Inventory not found",
                });
                return;
            }
            await inventory.destroy();
            res.status(200).json({
                message: "Inventory permanently deleted",
                id,
            });
        }
        catch (error) {
            res.status(500).json({
                error: "Error deleting inventory",
                detail: String(error),
            });
        }
    }
}
exports.InventoryController = InventoryController;
//# sourceMappingURL=inventory.controller.js.map