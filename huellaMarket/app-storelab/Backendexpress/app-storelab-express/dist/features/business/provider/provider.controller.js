"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProviderController = void 0;
const provider_model_1 = require("./provider.model");
function paramId(req) {
    const raw = req.params.id;
    const value = Array.isArray(raw) ? raw[0] : raw;
    return Number(value);
}
class ProviderController {
    async getAll(req, res) {
        try {
            const providers = await provider_model_1.Provider.findAll({
                where: { isActive: true },
            });
            res.status(200).json({ providers });
        }
        catch (error) {
            res.status(500).json({
                error: "Error fetching providers",
                detail: String(error),
            });
        }
    }
    async getOne(req, res) {
        try {
            const id = paramId(req);
            const provider = await provider_model_1.Provider.findByPk(id);
            if (!provider) {
                res.status(404).json({ error: "Provider not found" });
                return;
            }
            res.status(200).json({ provider });
        }
        catch (error) {
            res.status(500).json({
                error: "Error fetching provider",
                detail: String(error),
            });
        }
    }
    async create(req, res) {
        try {
            const body = req.body;
            const provider = await provider_model_1.Provider.create({
                nit: body.nit,
                razon_social: body.razon_social,
                contacto: body.contacto ?? null,
                telefono: body.telefono ?? null,
                email: body.email ?? null,
                isActive: body.isActive ?? true,
            });
            res.status(201).json({ provider });
        }
        catch (error) {
            res.status(500).json({
                error: "Error creating provider",
                detail: String(error),
            });
        }
    }
    async updatePut(req, res) {
        try {
            const id = paramId(req);
            const provider = await provider_model_1.Provider.findByPk(id);
            if (!provider) {
                res.status(404).json({ error: "Provider not found" });
                return;
            }
            const body = req.body;
            await provider.update({
                nit: body.nit,
                razon_social: body.razon_social,
                contacto: body.contacto ?? null,
                telefono: body.telefono ?? null,
                email: body.email ?? null,
                isActive: body.isActive ?? true,
            });
            res.status(200).json({ provider });
        }
        catch (error) {
            res.status(500).json({
                error: "Error updating provider (PUT)",
                detail: String(error),
            });
        }
    }
    async updatePatch(req, res) {
        try {
            const id = paramId(req);
            const provider = await provider_model_1.Provider.findByPk(id);
            if (!provider) {
                res.status(404).json({ error: "Provider not found" });
                return;
            }
            const body = req.body;
            await provider.update(body);
            res.status(200).json({ provider });
        }
        catch (error) {
            res.status(500).json({
                error: "Error updating provider (PATCH)",
                detail: String(error),
            });
        }
    }
    async deletePhysical(req, res) {
        try {
            const id = paramId(req);
            const provider = await provider_model_1.Provider.findByPk(id);
            if (!provider) {
                res.status(404).json({ error: "Provider not found" });
                return;
            }
            await provider.destroy();
            res.status(200).json({
                message: "Provider permanently deleted",
                id,
            });
        }
        catch (error) {
            res.status(500).json({
                error: "Error deleting provider",
                detail: String(error),
            });
        }
    }
    async deleteLogical(req, res) {
        try {
            const id = paramId(req);
            const provider = await provider_model_1.Provider.findByPk(id);
            if (!provider) {
                res.status(404).json({ error: "Provider not found" });
                return;
            }
            await provider.update({
                isActive: false,
            });
            res.status(200).json({
                message: "Provider deactivated successfully",
                provider,
            });
        }
        catch (error) {
            res.status(500).json({
                error: "Error deactivating provider",
                detail: String(error),
            });
        }
    }
}
exports.ProviderController = ProviderController;
//# sourceMappingURL=provider.controller.js.map