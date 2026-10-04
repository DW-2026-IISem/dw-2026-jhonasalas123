import { PetRoutes } from "../features/business/pet/pet.routes";
import { HealthRecordRoutes } from "../features/business/health-record/health-record.routes";
import { PetServiceRoutes } from "../features/business/pet-service/pet-service.routes";
import { ServiceAppointmentRoutes } from "../features/business/service-appointment/service-appointment.routes";

export class Routes {
  public petRoutes: PetRoutes = new PetRoutes();
  public healthRecordRoutes: HealthRecordRoutes = new HealthRecordRoutes();
  public petServiceRoutes: PetServiceRoutes = new PetServiceRoutes();
  public serviceAppointmentRoutes: ServiceAppointmentRoutes =
    new ServiceAppointmentRoutes();
}
