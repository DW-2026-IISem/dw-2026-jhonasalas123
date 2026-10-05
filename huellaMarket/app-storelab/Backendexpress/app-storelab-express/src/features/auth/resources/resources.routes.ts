import { Router } from "express";
import { authenticate, authorize } from "../access";
import { ResourcesController } from "./resources.controller";

export class ResourceRoutes {
  private readonly controller = new ResourcesController();

  public routes(router: Router): void {
    router.get(
      "/api/recursos",
      authenticate,
      authorize,
      this.controller.getAll.bind(this.controller)
    );

    router.get(
      "/api/recursos/:id",
      authenticate,
      authorize,
      this.controller.getOne.bind(this.controller)
    );

    router.post(
      "/api/recursos",
      authenticate,
      authorize,
      this.controller.create.bind(this.controller)
    );

    router.put(
      "/api/recursos/:id",
      authenticate,
      authorize,
      this.controller.updatePut.bind(this.controller)
    );

    router.patch(
      "/api/recursos/:id",
      authenticate,
      authorize,
      this.controller.updatePatch.bind(this.controller)
    );

    router.delete(
      "/api/recursos/:id",
      authenticate,
      authorize,
      this.controller.delete.bind(this.controller)
    );

    router.patch(
      "/api/recursos/:id/deactivate",
      authenticate,
      authorize,
      this.controller.deactivate.bind(this.controller)
    );
  }
}
