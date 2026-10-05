"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
const session_routes_1 = require("../features/auth/session/session.routes");
const refresh_tokens_routes_1 = require("../features/auth/refresh-tokens/refresh-tokens.routes");
const users_routes_1 = require("../features/auth/users/users.routes");
const roles_routes_1 = require("../features/auth/roles/roles.routes");
const resources_routes_1 = require("../features/auth/resources/resources.routes");
const role_users_routes_1 = require("../features/auth/role-users/role-users.routes");
const resource_roles_routes_1 = require("../features/auth/resource-roles/resource-roles.routes");
const client_routes_1 = require("../features/business/client/client.routes");
const pet_routes_1 = require("../features/business/pet/pet.routes");
const health_record_routes_1 = require("../features/business/health-record/health-record.routes");
const pet_service_routes_1 = require("../features/business/pet-service/pet-service.routes");
const service_appointment_routes_1 = require("../features/business/service-appointment/service-appointment.routes");
const product_routes_1 = require("../features/business/product/product.routes");
const provider_routes_1 = require("../features/business/provider/provider.routes");
const inventory_routes_1 = require("../features/business/inventory/inventory.routes");
const sale_routes_1 = require("../features/business/sale/sale.routes");
const sale_detail_routes_1 = require("../features/business/sale-detail/sale-detail.routes");
const payment_routes_1 = require("../features/business/payment/payment.routes");
class Routes {
    constructor() {
        this.sessionRoutes = new session_routes_1.SessionRoutes();
        this.refreshTokensRoutes = new refresh_tokens_routes_1.RefreshTokensRoutes();
        this.usersRoutes = new users_routes_1.UsersRoutes();
        this.rolesRoutes = new roles_routes_1.RolesRoutes();
        this.resourcesRoutes = new resources_routes_1.ResourceRoutes();
        this.roleUsersRoutes = new role_users_routes_1.RoleUsersRoutes();
        this.resourceRolesRoutes = new resource_roles_routes_1.ResourceRolesRoutes();
        this.clientRoutes = new client_routes_1.ClientRoutes();
        this.petRoutes = new pet_routes_1.PetRoutes();
        this.healthRecordRoutes = new health_record_routes_1.HealthRecordRoutes();
        this.petServiceRoutes = new pet_service_routes_1.PetServiceRoutes();
        this.serviceAppointmentRoutes = new service_appointment_routes_1.ServiceAppointmentRoutes();
        this.productRoutes = new product_routes_1.ProductRoutes();
        this.providerRoutes = new provider_routes_1.ProviderRoutes();
        this.inventoryRoutes = new inventory_routes_1.InventoryRoutes();
        this.paymentRoutes = new payment_routes_1.PaymentRoutes();
        this.saleDetailRoutes = new sale_detail_routes_1.SaleDetailRoutes();
        this.saleRoutes = new sale_routes_1.SaleRoutes();
    }
}
exports.Routes = Routes;
//# sourceMappingURL=index.js.map