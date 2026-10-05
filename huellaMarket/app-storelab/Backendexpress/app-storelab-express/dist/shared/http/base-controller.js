"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseController = void 0;
class BaseController {
    async run(res, work) {
        try {
            const result = await work();
            if (result === undefined) {
                res.status(204).send();
                return;
            }
            res.status(200).json(result);
        }
        catch (error) {
            const status = typeof error === "object" &&
                error !== null &&
                "statusCode" in error &&
                typeof error.statusCode === "number"
                ? error.statusCode
                : 500;
            const message = error instanceof Error
                ? error.message
                : "Error interno del servidor";
            res.status(status).json({
                error: message,
            });
        }
    }
    paramId(req) {
        const id = Number(req.params.id);
        if (!Number.isInteger(id) || id <= 0) {
            throw new Error("ID inválido");
        }
        return id;
    }
}
exports.BaseController = BaseController;
//# sourceMappingURL=base-controller.js.map