import dotenv from "dotenv";
import { Application } from "express";
import { sequelize, getDatabaseInfo, testConnection } from "../database/db";
import "../features/business/client/client.model";
import "../features/business/health-record/health-record.model";
import "../features/business/service-appointment/service-appointment.model";
import "../features/business/product/product.model";
import "../features/business/provider/provider.model";
import "../features/business/inventory/inventory.model";
import "../features/business/sale/sale.model";
import "../features/business/sale-detail/sale-detail.model";
import "../features/business/payment/payment.model";
import { Routes } from "../routes/index";
import { ProviderRoutes } from "../features/business/provider/provider.routes";
import "../features/auth/users/user.model";
import "../features/auth/roles/role.model";
import "../features/auth/resources/resource.model";
import "../features/auth/role-users/role-user.model";
import "../features/auth/resource-roles/resource-role.model";
import "../features/auth/refresh-tokens/refresh-token.model";
import "../features/auth/rbac.associations";
dotenv.config();

export const config = {
  port: process.env.PORT || 4000,
};

export class App {
  public app: Application;
  public routePrv: Routes = new Routes();

  constructor(app: Application) {
    this.app = app;
  }

  public routes(): void {
    this.routePrv.sessionRoutes.routes(this.app);
    this.routePrv.petRoutes.routes(this.app);
    this.routePrv.healthRecordRoutes.routes(this.app);
    this.routePrv.petServiceRoutes.routes(this.app);
    this.routePrv.serviceAppointmentRoutes.routes(this.app);
    this.routePrv.productRoutes.routes(this.app);
    this.routePrv.providerRoutes.routes(this.app);
    this.routePrv.inventoryRoutes.routes(this.app);
    this.routePrv.paymentRoutes.routes(this.app);
    this.routePrv.saleDetailRoutes.routes(this.app);
    this.routePrv.saleRoutes.routes(this.app);
  }

  public async dbConnection(): Promise<void> {
    try {
      // Mostrar información de la base de datos seleccionada
      const dbInfo = getDatabaseInfo();
      console.log(`🔗 Intentando conectar a: ${dbInfo.engine.toUpperCase()}`);

      // Probar la conexión
      const isConnected = await testConnection();

      if (!isConnected) {
        throw new Error(
          `No se pudo conectar a la base de datos ${dbInfo.engine.toUpperCase()}`
        );
      }

      // alter: true actualiza columnas faltantes.
      // force: false no recrea tablas; no borra datos.
      await sequelize.sync({ force: false, alter: true });
      console.log(`📦 Base de datos sincronizada exitosamente`);
    } catch (error) {
      console.error("❌ Error al conectar con la base de datos:", error);
      process.exit(1);
    }
  }
}
