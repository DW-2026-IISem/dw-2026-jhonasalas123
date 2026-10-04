"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const product_model_1 = require("./product.model");
function paramId(req) {
    const raw = req.params.id;
    const value = Array.isArray(raw) ? raw[0] : raw;
    return Number(value);
}
class ProductController {
    // ================== READ ==================
    // ISS-03-B — GET /api/productos
    async getAll(req, res) {
        try {
            const products = await product_model_1.Product.findAll({
                where: { isActive: true },
            });
            res.status(200).json({ products });
        }
        catch (error) {
            res.status(500).json({
                error: "Error fetching products",
                detail: String(error),
            });
        }
    }
    // ISS-03-B — GET /api/productos/:id
    async getOne(req, res) {
        try {
            const id = paramId(req);
            const product = await product_model_1.Product.findByPk(id);
            if (!product) {
                res.status(404).json({
                    error: "Product not found",
                });
                return;
            }
            res.status(200).json({ product });
        }
        catch (error) {
            res.status(500).json({
                error: "Error fetching product",
                detail: String(error),
            });
        }
    }
    // ================== CREATE ==================
    // ISS-03-C — POST /api/productos
    async create(req, res) {
        try {
            const body = req.body;
            const product = await product_model_1.Product.create({
                sku: body.sku,
                nombre: body.nombre,
                descripcion: body.descripcion ?? null,
                precio: body.precio,
                isActive: body.isActive ?? true,
            });
            res.status(201).json({ product });
        }
        catch (error) {
            res.status(500).json({
                error: "Error creating product",
                detail: String(error),
            });
        }
    }
    // ================== UPDATE ==================
    // ISS-03-D — PUT /api/productos/:id
    async updatePut(req, res) {
        try {
            const id = paramId(req);
            const product = await product_model_1.Product.findByPk(id);
            if (!product) {
                res.status(404).json({
                    error: "Product not found",
                });
                return;
            }
            const body = req.body;
            await product.update({
                sku: body.sku,
                nombre: body.nombre,
                descripcion: body.descripcion ?? null,
                precio: body.precio,
                isActive: body.isActive ?? true,
            });
            res.status(200).json({ product });
        }
        catch (error) {
            res.status(500).json({
                error: "Error updating product (PUT)",
                detail: String(error),
            });
        }
    }
    // ISS-03-D — PATCH /api/productos/:id
    async updatePatch(req, res) {
        try {
            const id = paramId(req);
            const product = await product_model_1.Product.findByPk(id);
            if (!product) {
                res.status(404).json({
                    error: "Product not found",
                });
                return;
            }
            const body = req.body;
            await product.update(body);
            res.status(200).json({ product });
        }
        catch (error) {
            res.status(500).json({
                error: "Error updating product (PATCH)",
                detail: String(error),
            });
        }
    }
    // ================== DELETE ==================
    // ISS-03-E — DELETE físico /api/productos/:id
    async deletePhysical(req, res) {
        try {
            const id = paramId(req);
            const product = await product_model_1.Product.findByPk(id);
            if (!product) {
                res.status(404).json({
                    error: "Product not found",
                });
                return;
            }
            await product.destroy();
            res.status(200).json({
                message: "Product permanently deleted",
                id,
            });
        }
        catch (error) {
            res.status(500).json({
                error: "Error deleting product",
                detail: String(error),
            });
        }
    }
    // ISS-03-E — DELETE lógico /api/productos/:id/deactivate
    async deleteLogical(req, res) {
        try {
            const id = paramId(req);
            const product = await product_model_1.Product.findByPk(id);
            if (!product) {
                res.status(404).json({
                    error: "Product not found",
                });
                return;
            }
            await product.update({
                isActive: false,
            });
            res.status(200).json({
                message: "Product deactivated successfully",
                product,
            });
        }
        catch (error) {
            res.status(500).json({
                error: "Error deactivating product",
                detail: String(error),
            });
        }
    }
}
exports.ProductController = ProductController;
//# sourceMappingURL=product.controller.js.map