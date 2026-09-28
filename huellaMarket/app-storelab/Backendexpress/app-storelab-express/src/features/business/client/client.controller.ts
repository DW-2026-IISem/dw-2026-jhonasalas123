import { Controller, Get, Param, NotFoundException } from "@nestjs/common";
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
  // (rellenar en ISS-03-C)

  // ================== UPDATE ==================
  // (rellenar en ISS-03-D)

  // ================== DELETE ==================
  // (rellenar en ISS-03-E)
}

