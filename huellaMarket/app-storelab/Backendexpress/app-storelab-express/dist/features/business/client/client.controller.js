"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientController = void 0;
const client_model_1 = require("./client.model");
function paramId(req) {
    const raw = req.params.id;
    const value = Array.isArray(raw) ? raw[0] : raw;
    return Number(value);
}
class ClientController {
    async getAll(_req, res) {
        try {
            const clients = await client_model_1.Client.findAll({
                where: { is_active: true },
                attributes: { exclude: ["password"] },
            });
            res.status(200).json({ clients });
        }
        catch (error) {
            res.status(500).json({
                error: "Error fetching clients",
                detail: String(error),
            });
        }
    }
    async getOne(req, res) {
        try {
            const id = paramId(req);
            const client = await client_model_1.Client.findByPk(id, {
                attributes: { exclude: ["password"] },
            });
            if (!client) {
                res.status(404).json({ error: "Client not found" });
                return;
            }
            res.status(200).json({ client });
        }
        catch (error) {
            res.status(500).json({
                error: "Error fetching client",
                detail: String(error),
            });
        }
    }
    async create(req, res) {
        try {
            const body = req.body;
            const client = await client_model_1.Client.create({
                tipo_documento: body.tipo_documento,
                numero_documento: body.numero_documento,
                nombre: body.nombre,
                telefono: body.telefono,
                email: body.email,
                is_active: true,
            });
            res.status(201).json({ client });
        }
        catch (error) {
            res.status(500).json({
                error: "Error creating client",
                detail: String(error),
            });
        }
    }
    async updatePut(req, res) {
        try {
            const id = paramId(req);
            const client = await client_model_1.Client.findByPk(id);
            if (!client) {
                res.status(404).json({ error: "Client not found" });
                return;
            }
            const body = req.body;
            await client.update({
                tipo_documento: body.tipo_documento,
                numero_documento: body.numero_documento,
                nombre: body.nombre,
                telefono: body.telefono,
                email: body.email,
                is_active: body.is_active ?? client.is_active,
            });
            res.status(200).json({ client });
        }
        catch (error) {
            res.status(500).json({
                error: "Error updating client (PUT)",
                detail: String(error),
            });
        }
    }
    async updatePatch(req, res) {
        try {
            const id = paramId(req);
            const client = await client_model_1.Client.findByPk(id);
            if (!client) {
                res.status(404).json({ error: "Client not found" });
                return;
            }
            await client.update(req.body);
            res.status(200).json({ client });
        }
        catch (error) {
            res.status(500).json({
                error: "Error updating client (PATCH)",
                detail: String(error),
            });
        }
    }
    async deletePhysical(req, res) {
        try {
            const id = paramId(req);
            const client = await client_model_1.Client.findByPk(id);
            if (!client) {
                res.status(404).json({ error: "Client not found" });
                return;
            }
            await client.destroy();
            res.status(200).json({
                message: "Client permanently deleted",
                id,
            });
        }
        catch (error) {
            res.status(500).json({
                error: "Error deleting client",
                detail: String(error),
            });
        }
    }
    async deleteLogical(req, res) {
        try {
            const id = paramId(req);
            const client = await client_model_1.Client.findByPk(id);
            if (!client) {
                res.status(404).json({ error: "Client not found" });
                return;
            }
            await client.update({ is_active: false });
            res.status(200).json({
                message: "Client deactivated (logical delete)",
                client,
            });
        }
        catch (error) {
            res.status(500).json({
                error: "Error deactivating client",
                detail: String(error),
            });
        }
    }
}
exports.ClientController = ClientController;
//# sourceMappingURL=client.controller.js.map