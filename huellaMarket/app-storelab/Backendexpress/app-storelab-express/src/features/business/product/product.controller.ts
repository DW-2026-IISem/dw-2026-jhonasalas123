import { Request, Response } from "express";
import { Product, ProductI } from "./product.model";

function paramId(req: Request): number {
  const raw = req.params.id;
  const value = Array.isArray(raw) ? raw[0] : raw;
  return Number(value);
}

export class ProductController {

  // ================== READ ==================

  // ISS-03-B — GET /api/productos
  public async getAll(req: Request, res: Response): Promise<void> {
    try {
      const products = await Product.findAll({
        where: { isActive: true },
      });

      res.status(200).json({ products });
    } catch (error) {
      res.status(500).json({
        error: "Error fetching products",
        detail: String(error),
      });
    }
  }

  // ISS-03-B — GET /api/productos/:id
  public async getOne(req: Request, res: Response): Promise<void> {
    try {
      const id = paramId(req);

      const product = await Product.findByPk(id);

      if (!product) {
        res.status(404).json({
          error: "Product not found",
        });
        return;
      }

      res.status(200).json({ product });
    } catch (error) {
      res.status(500).json({
        error: "Error fetching product",
        detail: String(error),
      });
    }
  }

  // ================== CREATE ==================

  // ISS-03-C — POST /api/productos
  public async create(req: Request, res: Response): Promise<void> {
    try {
      const body = req.body as ProductI;

      const product = await Product.create({
        sku: body.sku,
        nombre: body.nombre,
        descripcion: body.descripcion ?? null,
        precio: body.precio,
        isActive: body.isActive ?? true,
      });

      res.status(201).json({ product });
    } catch (error) {
      res.status(500).json({
        error: "Error creating product",
        detail: String(error),
      });
    }
  }

  // ================== UPDATE ==================

  // ISS-03-D — PUT /api/productos/:id
  public async updatePut(req: Request, res: Response): Promise<void> {
    try {
      const id = paramId(req);

      const product = await Product.findByPk(id);

      if (!product) {
        res.status(404).json({
          error: "Product not found",
        });
        return;
      }

      const body = req.body as ProductI;

      await product.update({
        sku: body.sku,
        nombre: body.nombre,
        descripcion: body.descripcion ?? null,
        precio: body.precio,
        isActive: body.isActive ?? true,
      });

      res.status(200).json({ product });
    } catch (error) {
      res.status(500).json({
        error: "Error updating product (PUT)",
        detail: String(error),
      });
    }
  }

  // ISS-03-D — PATCH /api/productos/:id
  public async updatePatch(req: Request, res: Response): Promise<void> {
    try {
      const id = paramId(req);

      const product = await Product.findByPk(id);

      if (!product) {
        res.status(404).json({
          error: "Product not found",
        });
        return;
      }

      const body = req.body as Partial<ProductI>;

      await product.update(body);

      res.status(200).json({ product });
    } catch (error) {
      res.status(500).json({
        error: "Error updating product (PATCH)",
        detail: String(error),
      });
    }
  }

  // ================== DELETE ==================

  // ISS-03-E — DELETE físico /api/productos/:id
  public async deletePhysical(req: Request, res: Response): Promise<void> {
    try {
      const id = paramId(req);

      const product = await Product.findByPk(id);

      if (!product) {
        res.status(404).json({
          error: "Product not found",
        });
        return;
      }

      await product.destroy();

      res.status(200).json({
        message: "Product permanently deleted",
        id,
      });
    } catch (error) {
      res.status(500).json({
        error: "Error deleting product",
        detail: String(error),
      });
    }
  }

  // ISS-03-E — DELETE lógico /api/productos/:id/deactivate
  public async deleteLogical(req: Request, res: Response): Promise<void> {
    try {
      const id = paramId(req);

      const product = await Product.findByPk(id);

      if (!product) {
        res.status(404).json({
          error: "Product not found",
        });
        return;
      }

      await product.update({
        isActive: false,
      });

      res.status(200).json({
        message: "Product deactivated successfully",
        product,
      });
    } catch (error) {
      res.status(500).json({
        error: "Error deactivating product",
        detail: String(error),
      });
    }
  }
}
