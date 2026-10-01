"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PetController = void 0;
const pet_model_1 = require("./pet.model");
function paramId(req) {
    const raw = req.params.id;
    const value = Array.isArray(raw) ? raw[0] : raw;
    return Number(value);
}
class PetController {
    // ================== READ ==================
    async getAll(req, res) {
        try {
            const pets = await pet_model_1.Pet.findAll({
                where: { isActive: true },
            });
            res.status(200).json({ pets });
        }
        catch (error) {
            res.status(500).json({
                error: "Error fetching pets",
                detail: String(error),
            });
        }
    }
    async getOne(req, res) {
        try {
            const id = paramId(req);
            const pet = await pet_model_1.Pet.findByPk(id);
            if (!pet) {
                res.status(404).json({ error: "Pet not found" });
                return;
            }
            res.status(200).json({ pet });
        }
        catch (error) {
            res.status(500).json({
                error: "Error fetching pet",
                detail: String(error),
            });
        }
    }
    // ================== CREATE ==================
    async create(req, res) {
        try {
            const body = req.body;
            const pet = await pet_model_1.Pet.create({
                nombre: body.nombre,
                descripcion: body.descripcion,
                isActive: body.isActive ?? true,
            });
            res.status(201).json({ pet });
        }
        catch (error) {
            res.status(500).json({
                error: "Error creating pet",
                detail: String(error),
            });
        }
    }
    // ================== UPDATE ==================
    async updatePut(req, res) {
        try {
            const id = paramId(req);
            const body = req.body;
            const pet = await pet_model_1.Pet.findByPk(id);
            if (!pet) {
                res.status(404).json({ error: "Pet not found" });
                return;
            }
            await pet.update({
                nombre: body.nombre,
                descripcion: body.descripcion,
                isActive: body.isActive ?? pet.isActive,
            });
            res.status(200).json({ pet });
        }
        catch (error) {
            res.status(500).json({
                error: "Error updating pet (PUT)",
                detail: String(error),
            });
        }
    }
    async updatePatch(req, res) {
        try {
            const id = paramId(req);
            const body = req.body;
            const pet = await pet_model_1.Pet.findByPk(id);
            if (!pet) {
                res.status(404).json({ error: "Pet not found" });
                return;
            }
            await pet.update(body);
            res.status(200).json({ pet });
        }
        catch (error) {
            res.status(500).json({
                error: "Error updating pet (PATCH)",
                detail: String(error),
            });
        }
    }
}
exports.PetController = PetController;
//# sourceMappingURL=pet.controller.js.map