import {
  Controller,
  Get,
  Post,
  Put,
  Patch,
  Delete,
  Param,
  Body,
  NotFoundException,
  HttpCode,
  HttpStatus,
} from "@nestjs/common";
import { Client } from "./client.model";

@Controller("api/clientes")
export class ClientController {
  // ================== READ ==================

  @Get()
  public async getAll() {
    const clients = await Client.findAll({
      where: { is_active: true },
      attributes: {
        exclude: ["password"],
      },
    });

    return { clients };
  }

  @Get(":id")
  public async getOne(@Param("id") id: string) {
    const client = await Client.findByPk(Number(id), {
      attributes: {
        exclude: ["password"],
      },
    });

    if (!client) {
      throw new NotFoundException("Client not found");
    }

    return { client };
  }

  // ================== CREATE ==================

  @Post()
  @HttpCode(HttpStatus.CREATED)
  public async create(@Body() body: {
    tipo_documento: string;
    numero_documento: string;
    nombre: string;
    telefono?: string;
    email?: string;
  }) {
    const client = await Client.create({
      tipo_documento: body.tipo_documento,
      numero_documento: body.numero_documento,
      nombre: body.nombre,
      telefono: body.telefono,
      email: body.email,
      is_active: true,
    });

    return { client };
  }

  // ================== UPDATE ==================

  @Put(":id")
  public async updatePut(
    @Param("id") id: string,
    @Body() body: {
      tipo_documento: string;
      numero_documento: string;
      nombre: string;
      telefono?: string;
      email?: string;
      is_active?: boolean;
    }
  ) {
    const client = await Client.findByPk(Number(id));

    if (!client) {
      throw new NotFoundException("Client not found");
    }

    await client.update({
      tipo_documento: body.tipo_documento,
      numero_documento: body.numero_documento,
      nombre: body.nombre,
      telefono: body.telefono,
      email: body.email,
      is_active: body.is_active ?? client.is_active,
    });

    return { client };
  }

  @Patch(":id")
  public async updatePatch(
    @Param("id") id: string,
    @Body() body: Partial<{
      tipo_documento: string;
      numero_documento: string;
      nombre: string;
      telefono: string;
      email: string;
      is_active: boolean;
    }>
  ) {
    const client = await Client.findByPk(Number(id));

    if (!client) {
      throw new NotFoundException("Client not found");
    }

    await client.update(body);

    return { client };
  }

  // ================== DELETE ==================

  /** Eliminación física */
  @Delete(":id")
  public async deletePhysical(@Param("id") id: string) {
    const client = await Client.findByPk(Number(id));

    if (!client) {
      throw new NotFoundException("Client not found");
    }

    await client.destroy();

    return {
      message: "Client permanently deleted",
      id: Number(id),
    };
  }

  /** Eliminación lógica → is_active = false */
  @Patch(":id/deactivate")
  public async deleteLogical(@Param("id") id: string) {
    const client = await Client.findByPk(Number(id));

    if (!client) {
      throw new NotFoundException("Client not found");
    }

    await client.update({
      is_active: false,
    });

    return {
      message: "Client deactivated (logical delete)",
      client,
    };
  }
}
