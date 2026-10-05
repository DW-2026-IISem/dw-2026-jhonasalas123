"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const db_1 = require("../database/db");
// Business — modelos
require("../features/business/client/client.model");
require("../features/business/health-record/health-record.model");
require("../features/business/inventory/inventory.model");
require("../features/business/payment/payment.model");
require("../features/business/pet-service/pet-service.model");
require("../features/business/pet/pet.model");
require("../features/business/product/product.model");
require("../features/business/provider/provider.model");
require("../features/business/sale-detail/sale-detail.model");
require("../features/business/sale/sale.model");
require("../features/business/service-appointment/service-appointment.model");
// Auth — modelos
require("../features/auth/users/user.model");
require("../features/auth/roles/role.model");
require("../features/auth/resources/resource.model");
require("../features/auth/role-users/role-user.model");
require("../features/auth/resource-roles/resource-role.model");
require("../features/auth/refresh-tokens/refresh-token.model");
require("../features/auth/rbac.associations");
const index_1 = require("../routes/index");
const index_2 = require("../swagger/index");
dotenv_1.default.config();
class App {
    constructor(port) {
        this.port = port;
        this.routePrv = new index_1.Routes();
        this.app = (0, express_1.default)();
        this.settings();
        this.middlewares();
        this.routes();
        this.docs();
        this.errorHandling();
    }
    settings() {
        this.app.set("port", this.port || process.env.PORT || 4000);
    }
    middlewares() {
        this.app.use((0, morgan_1.default)("dev"));
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.routePrv.clientRoutes.routes(this.app);
        this.routePrv.healthRecordRoutes.routes(this.app);
        this.routePrv.inventoryRoutes.routes(this.app);
        this.routePrv.paymentRoutes.routes(this.app);
        this.routePrv.petServiceRoutes.routes(this.app);
        this.routePrv.petRoutes.routes(this.app);
        this.routePrv.productRoutes.routes(this.app);
        this.routePrv.providerRoutes.routes(this.app);
        this.routePrv.saleDetailRoutes.routes(this.app);
        this.routePrv.saleRoutes.routes(this.app);
        this.routePrv.serviceAppointmentRoutes.routes(this.app);
        this.routePrv.sessionRoutes.routes(this.app);
        this.routePrv.refreshTokensRoutes.routes(this.app);
        this.routePrv.usersRoutes.routes(this.app);
        this.routePrv.rolesRoutes.routes(this.app);
        this.routePrv.resourcesRoutes.routes(this.app);
        this.routePrv.roleUsersRoutes.routes(this.app);
        this.routePrv.resourceRolesRoutes.routes(this.app);
    }
    docs() {
        (0, index_2.setupSwagger)(this.app);
    }
    errorHandling() {
        const bodyErrorHandler = (err, _req, res, next) => {
            if (err instanceof SyntaxError && "body" in err) {
                res.status(400).json({
                    error: "Malformed JSON body",
                });
                return;
            }
            next(err);
        };
        this.app.use(bodyErrorHandler);
    }
    async dbConnection() {
        try {
            const dbInfo = (0, db_1.getDatabaseInfo)();
            console.log(`🔗 Intentando conectar a: ${dbInfo.engine.toUpperCase()}`);
            const isConnected = await (0, db_1.testConnection)();
            if (!isConnected) {
                throw new Error(`No se pudo conectar a la base de datos ${dbInfo.engine.toUpperCase()}`);
            }
            const force = process.env.DB_SYNC_FORCE === "true";
            const isMysql = db_1.sequelize.getDialect() === "mysql" ||
                db_1.sequelize.getDialect() === "mariadb";
            if (isMysql) {
                await db_1.sequelize.query("SET FOREIGN_KEY_CHECKS = 0");
            }
            try {
                await db_1.sequelize.sync({
                    force,
                    alter: !force,
                });
            }
            finally {
                if (isMysql) {
                    await db_1.sequelize.query("SET FOREIGN_KEY_CHECKS = 1");
                }
            }
            console.log(force
                ? "📦 Base de datos recreada (DB_SYNC_FORCE=true)"
                : "📦 Base de datos sincronizada exitosamente");
        }
        catch (error) {
            console.error("❌ Error al conectar con la base de datos:", error);
            process.exit(1);
        }
    }
    async listen() {
        await this.dbConnection();
        await this.app.listen(this.app.get("port"));
        console.log(`🚀 Servidor ejecutándose en puerto ${this.app.get("port")}`);
    }
}
exports.App = App;
//# sourceMappingURL=index.js.map