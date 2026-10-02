import { PetRoutes } from "../features/business/pet/pet.routes";
import { HealthRecordRoutes } from "../features/business/health-record/health-record.routes";

export class Routes {
  public petRoutes: PetRoutes = new PetRoutes();
  public healthRecordRoutes: HealthRecordRoutes = new HealthRecordRoutes();
}
