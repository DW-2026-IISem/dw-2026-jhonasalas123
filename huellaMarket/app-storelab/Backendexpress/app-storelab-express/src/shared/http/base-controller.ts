import { Request, Response } from "express";

export abstract class BaseController {
  protected async run<T>(
    res: Response,
    work: () => Promise<T>
  ): Promise<void> {
    try {
      const result = await work();

      if (result === undefined) {
        res.status(204).send();
        return;
      }

      res.status(200).json(result);
    } catch (error) {
      const status =
        typeof error === "object" &&
        error !== null &&
        "statusCode" in error &&
        typeof (error as { statusCode?: unknown }).statusCode === "number"
          ? (error as { statusCode: number }).statusCode
          : 500;

      const message =
        error instanceof Error
          ? error.message
          : "Error interno del servidor";

      res.status(status).json({
        error: message,
      });
    }
  }

  protected paramId(req: Request): number {
    const id = Number(req.params.id);

    if (!Number.isInteger(id) || id <= 0) {
      throw new Error("ID inválido");
    }

    return id;
  }
}
