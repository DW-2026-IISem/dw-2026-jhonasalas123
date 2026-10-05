import { NextFunction, Request, Response } from "express";
import { AppError } from "../../../shared/errors/app-error";
import { sendError } from "../../../shared/http/error-response";
import {
  extractBearerToken,
  verifyAccessToken,
} from "../../../shared/auth/jwt";
import { UsersRepository } from "../users/users.repository";

const usersRepository = new UsersRepository();

/**
 * Modalidad JWT — autenticación.
 *
 * 1. Lee Authorization: Bearer <token>.
 * 2. Verifica firma, algoritmo, issuer, audience y expiración.
 * 3. Revalida que el usuario exista y permanezca activo en BD.
 * 4. Deja la identidad en req.auth.
 *
 * No consulta roles ni permisos.
 */
export async function authenticate(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const token = extractBearerToken(req.headers.authorization);

    if (!token) {
      throw new AppError(401, "Missing Bearer token");
    }

    const payload = verifyAccessToken(token);

    const userId = Number(payload.sub);

    if (!Number.isInteger(userId) || userId < 1) {
      throw new AppError(401, "Invalid or expired access token");
    }

    const user = await usersRepository.findById(userId);

    if (!user || user.status !== "active") {
      throw new AppError(401, "User is not active");
    }

    req.auth = {
      id: user.id,
      username: user.username,
      email: user.email,
      tokenId: payload.jti,
    };

    next();
  } catch (error) {
    sendError(res, error);
  }
}
