import {
  Controller,
  Get,
  Post,
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
  // (rellenar en ISS-03-D)

  // ================== DELETE ==================
  // (rellenar en ISS-03-E)
}
