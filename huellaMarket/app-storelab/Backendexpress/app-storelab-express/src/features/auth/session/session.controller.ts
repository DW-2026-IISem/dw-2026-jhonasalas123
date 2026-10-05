import { Request, Response } from "express";
import { BaseController } from "../../../shared/http/base-controller";
import { SessionService } from "./session.service";

export class SessionController extends BaseController {
  private readonly service = new SessionService();

  public login = async (req: Request, res: Response): Promise<void> => {
    await this.run(res, () => this.service.login(req.body));
  };
}
