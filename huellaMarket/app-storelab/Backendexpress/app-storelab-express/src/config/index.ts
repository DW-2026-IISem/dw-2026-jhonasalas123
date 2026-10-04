import dotenv from "dotenv";
import { Application } from "express";
import { sequelize, getDatabaseInfo, testConnection } from "../database/db";
import "../features/business/client/client.model";
import "../features/business/health-record/health-record.model";
import "../features/business/service-appointment/service-appointment.model";
import "../features/business/product/product.model";
import { Routes } from "../routes/index";

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
    this.routePrv.petRoutes.routes(this.app);
    this.routePrv.healthRecordRoutes.routes(this.app);
    this.routePrv.petServiceRoutes.routes(this.app);
    this.routePrv.serviceAppointmentRoutes.routes(this.app);
    this.routePrv.productRoutes.routes(this.app);
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
