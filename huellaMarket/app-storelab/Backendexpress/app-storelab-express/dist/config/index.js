"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = exports.config = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = require("../database/db");
require("../features/business/client/client.model");
require("../features/business/health-record/health-record.model");
const index_1 = require("../routes/index");
dotenv_1.default.config();
exports.config = {
    port: process.env.PORT || 4000,
};
class App {
    constructor(app) {
        this.routePrv = new index_1.Routes();
        this.app = app;
    }
    routes() {
        this.routePrv.petRoutes.routes(this.app);
        this.routePrv.healthRecordRoutes.routes(this.app);
    }
    async dbConnection() {
        try {
            // Mostrar información de la base de datos seleccionada
            const dbInfo = (0, db_1.getDatabaseInfo)();
            console.log(`🔗 Intentando conectar a: ${dbInfo.engine.toUpperCase()}`);
            // Probar la conexión
            const isConnected = await (0, db_1.testConnection)();
            if (!isConnected) {
                throw new Error(`No se pudo conectar a la base de datos ${dbInfo.engine.toUpperCase()}`);
            }
            // alter: true actualiza columnas faltantes.
            // force: false no recrea tablas; no borra datos.
            await db_1.sequelize.sync({ force: false, alter: true });
            console.log(`📦 Base de datos sincronizada exitosamente`);
        }
        catch (error) {
            console.error("❌ Error al conectar con la base de datos:", error);
            process.exit(1);
        }
    }
}
exports.App = App;
//# sourceMappingURL=index.js.map