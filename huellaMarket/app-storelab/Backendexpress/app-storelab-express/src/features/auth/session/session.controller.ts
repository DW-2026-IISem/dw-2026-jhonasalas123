import { Request, Response } from "express";
import { BaseController } from "../../../shared/http/base-controller";
import { requireAuthUser } from "../../../shared/auth/auth-user";
import {
  LoginDto,
  LogoutSessionDto,
  RefreshSessionDto,
} from "./dto";
import { SessionService } from "./session.service";

/**
 * Controller del feature Session.
 *
 * login, refresh y logout son OPEN.
 * profile y myPermissions requieren JWT.
 */
export class SessionController extends BaseController {
  public constructor(
    private readonly service: SessionService =
      new SessionService()
  ) {
    super();
  }

  // LOGIN
  public async login(
    req: Request,
    res: Response
  ): Promise<void> {
    await this.run(res, async () => {
      const tokens = await this.service.login(
        req.body as LoginDto,
        deviceInfo(req)
      );

      res.status(200).json(tokens);
    });
  }

  // REFRESH
  public async refresh(
    req: Request,
    res: Response
  ): Promise<void> {
    await this.run(res, async () => {
      const tokens = await this.service.refresh(
        req.body as RefreshSessionDto,
        deviceInfo(req)
      );

      res.status(200).json(tokens);
    });
  }

  // LOGOUT
  public async logout(
    req: Request,
    res: Response
  ): Promise<void> {
    await this.run(res, async () => {
      await this.service.logout(
        req.body as LogoutSessionDto
      );

      res.status(200).json({
        message: "Session closed",
      });
    });
  }

  // PERFIL
  public async profile(
    req: Request,
    res: Response
  ): Promise<void> {
    await this.run(res, async () => {
      const user = await this.service.profile(
        requireAuthUser(req).id
      );

      res.status(200).json({ user });
    });
  }

  // PERMISOS
  public async myPermissions(
    req: Request,
    res: Response
  ): Promise<void> {
    await this.run(res, async () => {
      const permissions =
        await this.service.myPermissions(
          requireAuthUser(req).id
        );

      res.status(200).json({ permissions });
    });
  }
}

/**
 * Obtiene información del dispositivo desde User-Agent.
 */
function deviceInfo(req: Request): string | null {
  const value = req.headers["user-agent"];

  if (!value) {
    return null;
  }

  return String(value).slice(0, 500);
}
