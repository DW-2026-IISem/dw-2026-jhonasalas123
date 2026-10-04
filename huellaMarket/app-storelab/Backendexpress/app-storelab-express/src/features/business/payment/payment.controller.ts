import { Request, Response } from "express";
import { Payment, PaymentI } from "./payment.model";

function paramId(req: Request): number {
  const raw = req.params.id;
  const value = Array.isArray(raw) ? raw[0] : raw;
  return Number(value);
}

export class PaymentController {

  // GET ALL
  public async getAll(req: Request, res: Response): Promise<void> {
    try {
      const payments = await Payment.findAll();
      res.status(200).json({ payments });
    } catch (error) {
      res.status(500).json({
        error: "Error fetching payments",
        detail: String(error),
      });
    }
  }

  // GET ONE
  public async getOne(req: Request, res: Response): Promise<void> {
    try {
      const id = paramId(req);
      const payment = await Payment.findByPk(id);

      if (!payment) {
        res.status(404).json({
          error: "Payment not found",
        });
        return;
      }

      res.status(200).json({ payment });
    } catch (error) {
      res.status(500).json({
        error: "Error fetching payment",
        detail: String(error),
      });
    }
  }

  // CREATE
  public async create(req: Request, res: Response): Promise<void> {
    try {
      const body = req.body as PaymentI;

      const payment = await Payment.create({
        referencia_tipo: body.referencia_tipo,
        referencia_id: body.referencia_id,
        metodo: body.metodo,
        monto: body.monto,
        fecha: body.fecha ?? new Date(),
        estado: body.estado ?? "pendiente",
      });

      res.status(201).json({ payment });
    } catch (error) {
      res.status(500).json({
        error: "Error creating payment",
        detail: String(error),
      });
    }
  }

  // PUT
  public async updatePut(req: Request, res: Response): Promise<void> {
    try {
      const id = paramId(req);
      const payment = await Payment.findByPk(id);

      if (!payment) {
        res.status(404).json({
          error: "Payment not found",
        });
        return;
      }

      const body = req.body as PaymentI;

      await payment.update({
        referencia_tipo: body.referencia_tipo,
        referencia_id: body.referencia_id,
        metodo: body.metodo,
        monto: body.monto,
        fecha: body.fecha,
        estado: body.estado,
      });

      res.status(200).json({ payment });
    } catch (error) {
      res.status(500).json({
        error: "Error updating payment (PUT)",
        detail: String(error),
      });
    }
  }

  // PATCH
  public async updatePatch(req: Request, res: Response): Promise<void> {
    try {
      const id = paramId(req);
      const payment = await Payment.findByPk(id);

      if (!payment) {
        res.status(404).json({
          error: "Payment not found",
        });
        return;
      }

      await payment.update(req.body);

      res.status(200).json({ payment });
    } catch (error) {
      res.status(500).json({
        error: "Error updating payment (PATCH)",
        detail: String(error),
      });
    }
  }

  // DELETE
  public async deletePhysical(req: Request, res: Response): Promise<void> {
    try {
      const id = paramId(req);
      const payment = await Payment.findByPk(id);

      if (!payment) {
        res.status(404).json({
          error: "Payment not found",
        });
        return;
      }

      await payment.destroy();

      res.status(200).json({
        message: "Payment permanently deleted",
        id,
      });
    } catch (error) {
      res.status(500).json({
        error: "Error deleting payment",
        detail: String(error),
      });
    }
  }
}
