import { NextFunction, Request, Response } from "express";
import { AppError } from "../../../shared/errors/app-error";
import {
  extractBearerToken,
  verifyAccessToken,
} from "../../../shared/auth/jwt";

export async function authenticate(
  req: Request,
  _res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const token = extractBearerToken(req.headers.authorization);

    if (!token) {
      throw new AppError(401, "Token de acceso requerido");
    }

    const payload = verifyAccessToken(token);

    req.auth = {
      id: Number(payload.sub),
      username: payload.username,
      tokenId: payload.jti,
    };

    next();
  } catch (error) {
    next(error);
  }
}

export function authorize(
  _req: Request,
  _res: Response,
  next: NextFunction
): void {
  next();
}
