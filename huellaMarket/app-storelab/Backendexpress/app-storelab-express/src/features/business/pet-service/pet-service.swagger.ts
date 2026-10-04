import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";

export const PetServiceSwagger = {
  getAll: [
    ApiOperation({ summary: "Obtener todos los servicios de mascotas" }),
    ApiResponse({
      status: 200,
      description: "Lista de servicios de mascotas obtenida correctamente",
    }),
  ],

  getOne: [
    ApiOperation({ summary: "Obtener un servicio de mascota por ID" }),
    ApiResponse({
      status: 200,
      description: "Servicio de mascota encontrado",
    }),
    ApiResponse({
      status: 404,
      description: "Servicio de mascota no encontrado",
    }),
  ],

  create: [
    ApiOperation({ summary: "Crear un servicio de mascota" }),
    ApiResponse({
      status: 201,
      description: "Servicio de mascota creado correctamente",
    }),
  ],

  update: [
    ApiOperation({ summary: "Actualizar un servicio de mascota" }),
    ApiResponse({
      status: 200,
      description: "Servicio de mascota actualizado correctamente",
    }),
    ApiResponse({
      status: 404,
      description: "Servicio de mascota no encontrado",
    }),
  ],

  patch: [
    ApiOperation({ summary: "Actualizar parcialmente un servicio de mascota" }),
    ApiResponse({
      status: 200,
      description: "Servicio de mascota actualizado parcialmente",
    }),
  ],

  delete: [
    ApiOperation({ summary: "Desactivar un servicio de mascota" }),
    ApiResponse({
      status: 200,
      description: "Servicio de mascota desactivado correctamente",
    }),
  ],
};
