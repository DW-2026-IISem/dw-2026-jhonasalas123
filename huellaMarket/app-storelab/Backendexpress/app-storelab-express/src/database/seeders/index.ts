import dotenv from "dotenv";
import { sequelize, testConnection } from "../db";

import "../../features/business/client/client.model";
import { seedClients } from "../../features/business/client/client.seeder";

import "../../features/business/pet/pet.model";
import { seedPets } from "../../features/business/pet/pet.seeder";

import "../../features/business/health-record/health-record.model";
import { seedHealthRecords } from "../../features/business/health-record/health-record.seeder";

import "../../features/business/pet-service/pet-service.model";
import { seedPetServices } from "../../features/business/pet-service/pet-service.seeder";
import "../../features/business/product/product.model";
import { seedProducts } from "../../features/business/product/product.seeder";
import "../../features/business/provider/provider.model";
import { seedProviders } from "../../features/business/provider/provider.seeder";

import "../../features/business/service-appointment/service-appointment.model";
import "../../features/business/inventory/inventory.model";
import "../../features/business/sale/sale.model";
import { seedServiceAppointments } from "../../features/business/service-appointment/service-appointment.seeder";
import { seedInventories } from "../../features/business/inventory/inventory.seeder";
import { seedSales } from "../../features/business/sale/sale.seeder";
import { seedSaleDetails } from "../../features/business/sale-detail/sale-detail.seeder";

import { resolveSeedCounts } from "./counts";

dotenv.config();

/**
 * SeedersRunner — ejecuta TODOS los seeders de features.
 *
 * Ubicación: `src/database/seeders/`
 */
export async function runAllSeeders(): Promise<void> {
  const counts = resolveSeedCounts();

  console.log("🌱 Iniciando SeedersRunner...");
  console.log("📊 Conteos:", counts);

  const ok = await testConnection();

  if (!ok) {
    throw new Error("No hay conexión a la base de datos");
  }

  await sequelize.sync({ force: false, alter: true });

  // Orden: business (padres → hijos)
  await seedClients(counts.clients);
  await seedPets(counts.pets);
  await seedHealthRecords(counts.healthRecords);
  await seedPetServices(counts.pet_services);
  await seedProducts(counts.products);
    await seedProviders(counts.providers);
  await seedServiceAppointments(counts.service_appointments);
  await seedInventories(counts.inventories);
  await seedSaleDetails(counts.saleDetails);
  await seedSales(counts.sales);

  console.log("🌱 SeedersRunner finalizado");
}

if (require.main === module) {
  runAllSeeders()
    .then(async () => {
      await sequelize.close();
      process.exit(0);
    })
    .catch(async (err) => {
      console.error("❌ Error en seeders:", err);
      await sequelize.close();
      process.exit(1);
    });
}
