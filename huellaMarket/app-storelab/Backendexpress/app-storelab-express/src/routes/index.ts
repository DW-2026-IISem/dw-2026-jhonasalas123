import { SessionRoutes } from "../features/auth/session/session.routes";
import { RefreshTokensRoutes } from "../features/auth/refresh-tokens/refresh-tokens.routes";
import { UsersRoutes } from "../features/auth/users/users.routes";
import { RolesRoutes } from "../features/auth/roles/roles.routes";
import { ResourceRoutes } from "../features/auth/resources/resources.routes";
import { RoleUsersRoutes } from "../features/auth/role-users/role-users.routes";
import { ResourceRolesRoutes } from "../features/auth/resource-roles/resource-roles.routes";

import { ClientRoutes } from "../features/business/client/client.routes";
import { PetRoutes } from "../features/business/pet/pet.routes";
import { HealthRecordRoutes } from "../features/business/health-record/health-record.routes";
import { PetServiceRoutes } from "../features/business/pet-service/pet-service.routes";
import { ServiceAppointmentRoutes } from "../features/business/service-appointment/service-appointment.routes";
import { ProductRoutes } from "../features/business/product/product.routes";
import { ProviderRoutes } from "../features/business/provider/provider.routes";
import { InventoryRoutes } from "../features/business/inventory/inventory.routes";
import { SaleRoutes } from "../features/business/sale/sale.routes";
import { SaleDetailRoutes } from "../features/business/sale-detail/sale-detail.routes";
import { PaymentRoutes } from "../features/business/payment/payment.routes";

export class Routes {
  public sessionRoutes: SessionRoutes =
    new SessionRoutes();

  public refreshTokensRoutes: RefreshTokensRoutes =
    new RefreshTokensRoutes();

  public usersRoutes: UsersRoutes =
    new UsersRoutes();

  public rolesRoutes: RolesRoutes =
    new RolesRoutes();

  public resourcesRoutes: ResourceRoutes =
    new ResourceRoutes();

  public roleUsersRoutes: RoleUsersRoutes =
    new RoleUsersRoutes();

  public resourceRolesRoutes: ResourceRolesRoutes =
    new ResourceRolesRoutes();

  public clientRoutes: ClientRoutes =
    new ClientRoutes();

  public petRoutes: PetRoutes =
    new PetRoutes();

  public healthRecordRoutes: HealthRecordRoutes =
    new HealthRecordRoutes();

  public petServiceRoutes: PetServiceRoutes =
    new PetServiceRoutes();

  public serviceAppointmentRoutes: ServiceAppointmentRoutes =
    new ServiceAppointmentRoutes();

  public productRoutes: ProductRoutes =
    new ProductRoutes();

  public providerRoutes: ProviderRoutes =
    new ProviderRoutes();

  public inventoryRoutes: InventoryRoutes =
    new InventoryRoutes();

  public paymentRoutes: PaymentRoutes =
    new PaymentRoutes();

  public saleDetailRoutes: SaleDetailRoutes =
    new SaleDetailRoutes();

  public saleRoutes: SaleRoutes =
    new SaleRoutes();
}
