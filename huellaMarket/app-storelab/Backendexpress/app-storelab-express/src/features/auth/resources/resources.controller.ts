import { Request, Response } from "express";
import { BaseController } from "../../../shared/http/base-controller";
import {
  CreateResourceDto,
  PatchResourceDto,
  UpdateResourceDto,
} from "./dto";
import { ResourcesService } from "./resources.service";

export class ResourcesController extends BaseController {
  private readonly service = new ResourcesService();

  public async getAll(req: Request, res: Response): Promise<void> {
    await this.run(res, () => this.service.getAll());
  }

  public async getOne(req: Request, res: Response): Promise<void> {
    const id = this.paramId(req);
    await this.run(res, () => this.service.getOne(id));
  }

  public async create(req: Request, res: Response): Promise<void> {
    await this.run(res, () =>
      this.service.create(req.body as CreateResourceDto)
    );
  }

  public async updatePut(req: Request, res: Response): Promise<void> {
    const id = this.paramId(req);
    await this.run(res, () =>
      this.service.updatePut(id, req.body as UpdateResourceDto)
    );
  }

  public async updatePatch(req: Request, res: Response): Promise<void> {
    const id = this.paramId(req);
    await this.run(res, () =>
      this.service.updatePatch(id, req.body as PatchResourceDto)
    );
  }

  public async delete(req: Request, res: Response): Promise<void> {
    const id = this.paramId(req);
    await this.run(res, () => this.service.deletePhysical(id));
  }

  public async deactivate(req: Request, res: Response): Promise<void> {
    const id = this.paramId(req);
    await this.run(res, () => this.service.deleteLogical(id));
  }
}
