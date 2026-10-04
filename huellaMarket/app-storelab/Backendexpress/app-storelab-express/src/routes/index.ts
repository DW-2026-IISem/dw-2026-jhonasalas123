import { PetRoutes } from "../features/business/pet/pet.routes";
import { HealthRecordRoutes } from "../features/business/health-record/health-record.routes";
import { PetServiceRoutes } from "../features/business/pet-service/pet-service.routes";
import { ServiceAppointmentRoutes } from "../features/business/service-appointment/service-appointment.routes";
import { ProductRoutes } from "../features/business/product/product.routes";
import { ProviderRoutes } from "../features/business/provider/provider.routes";

export class Routes {
  public petRoutes: PetRoutes = new PetRoutes();
  public healthRecordRoutes: HealthRecordRoutes = new HealthRecordRoutes();
  public petServiceRoutes: PetServiceRoutes = new PetServiceRoutes();
  public serviceAppointmentRoutes: ServiceAppointmentRoutes =
    new ServiceAppointmentRoutes();
  public productRoutes: ProductRoutes = new ProductRoutes();
  public providerRoutes: ProviderRoutes = new ProviderRoutes();
}
