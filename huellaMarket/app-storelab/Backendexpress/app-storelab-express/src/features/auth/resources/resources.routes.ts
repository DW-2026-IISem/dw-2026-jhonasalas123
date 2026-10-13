import { Router } from "express";
import { jwtRbac } from "../access";
import { ResourcesController } from "./resources.controller";

export class ResourceRoutes {
  private readonly controller = new ResourcesController();

  public routes(router: Router): void {
    router.get(
      "/api/recursos",
      ...jwtRbac,
      this.controller.getAll.bind(this.controller)
    );

    router.get(
      "/api/recursos/:id",
      ...jwtRbac,
      this.controller.getOne.bind(this.controller)
    );

    router.post(
      "/api/recursos",
      ...jwtRbac,
      this.controller.create.bind(this.controller)
    );

    router.put(
      "/api/recursos/:id",
      ...jwtRbac,
      this.controller.updatePut.bind(this.controller)
    );

    router.patch(
      "/api/recursos/:id",
      ...jwtRbac,
      this.controller.updatePatch.bind(this.controller)
    );

    router.delete(
      "/api/recursos/:id",
      ...jwtRbac,
      this.controller.delete.bind(this.controller)
    );

    router.patch(
      "/api/recursos/:id/deactivate",
      ...jwtRbac,
      this.controller.deactivate.bind(this.controller)
    );
  }
}
