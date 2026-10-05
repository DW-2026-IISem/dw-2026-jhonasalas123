export interface CatalogResource {
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  path: string;
  description: string;
  seller?: boolean;
}

/**
 * Catálogo único de recursos protegibles por RBAC.
 *
 * Total: 58 recursos.
 *
 * `seller: true` marca los recursos que recibe el rol SELLER.
 * Las operaciones de sesión (`/api/sesion/*` y `/api/sesiones/*`) no son
 * recursos RBAC porque forman parte del flujo de autenticación.
 */
export const RESOURCE_CATALOG: CatalogResource[] = [
  // -------------------------------------------------------------------------
  // Clientes — 7
  // -------------------------------------------------------------------------
  {
    method: "GET",
    path: "/api/clientes",
    description: "Listar clientes",
    seller: true,
  },
  {
    method: "GET",
    path: "/api/clientes/:id",
    description: "Consultar cliente por ID",
    seller: true,
  },
  {
    method: "POST",
    path: "/api/clientes",
    description: "Crear cliente",
  },
  {
    method: "PUT",
    path: "/api/clientes/:id",
    description: "Actualizar cliente por PUT",
  },
  {
    method: "PATCH",
    path: "/api/clientes/:id",
    description: "Actualizar cliente por PATCH",
  },
  {
    method: "DELETE",
    path: "/api/clientes/:id",
    description: "Eliminar cliente",
  },
  {
    method: "PATCH",
    path: "/api/clientes/:id/deactivate",
    description: "Desactivar cliente",
  },

  // -------------------------------------------------------------------------
  // Tipos de producto — 7
  // -------------------------------------------------------------------------
  {
    method: "GET",
    path: "/api/tipos-producto",
    description: "Listar tipos de producto",
  },
  {
    method: "GET",
    path: "/api/tipos-producto/:id",
    description: "Consultar tipo de producto por ID",
  },
  {
    method: "POST",
    path: "/api/tipos-producto",
    description: "Crear tipo de producto",
  },
  {
    method: "PUT",
    path: "/api/tipos-producto/:id",
    description: "Actualizar tipo de producto por PUT",
  },
  {
    method: "PATCH",
    path: "/api/tipos-producto/:id",
    description: "Actualizar tipo de producto por PATCH",
  },
  {
    method: "DELETE",
    path: "/api/tipos-producto/:id",
    description: "Eliminar tipo de producto",
  },
  {
    method: "PATCH",
    path: "/api/tipos-producto/:id/deactivate",
    description: "Desactivar tipo de producto",
  },

  // -------------------------------------------------------------------------
  // Productos — 7
  // -------------------------------------------------------------------------
  {
    method: "GET",
    path: "/api/productos",
    description: "Listar productos",
    seller: true,
  },
  {
    method: "GET",
    path: "/api/productos/:id",
    description: "Consultar producto por ID",
    seller: true,
  },
  {
    method: "POST",
    path: "/api/productos",
    description: "Crear producto",
  },
  {
    method: "PUT",
    path: "/api/productos/:id",
    description: "Actualizar producto por PUT",
  },
  {
    method: "PATCH",
    path: "/api/productos/:id",
    description: "Actualizar producto por PATCH",
  },
  {
    method: "DELETE",
    path: "/api/productos/:id",
    description: "Eliminar producto",
  },
  {
    method: "PATCH",
    path: "/api/productos/:id/deactivate",
    description: "Desactivar producto",
  },

  // -------------------------------------------------------------------------
  // Ventas — 3
  // -------------------------------------------------------------------------
  {
    method: "GET",
    path: "/api/ventas",
    description: "Listar ventas",
    seller: true,
  },
  {
    method: "GET",
    path: "/api/ventas/:id",
    description: "Consultar venta por ID",
    seller: true,
  },
  {
    method: "POST",
    path: "/api/ventas",
    description: "Registrar venta",
    seller: true,
  },

  // -------------------------------------------------------------------------
  // Detalle de ventas — 1
  // -------------------------------------------------------------------------
  {
    method: "GET",
    path: "/api/ventas/:id/detalles",
    description: "Consultar detalle de una venta",
  },

  // -------------------------------------------------------------------------
  // Usuarios — 9
  // -------------------------------------------------------------------------
  {
    method: "GET",
    path: "/api/usuarios",
    description: "Listar usuarios",
  },
  {
    method: "GET",
    path: "/api/usuarios/:id",
    description: "Consultar usuario por ID",
  },
  {
    method: "POST",
    path: "/api/usuarios",
    description: "Crear usuario",
  },
  {
    method: "PUT",
    path: "/api/usuarios/:id",
    description: "Actualizar usuario por PUT",
  },
  {
    method: "PATCH",
    path: "/api/usuarios/:id",
    description: "Actualizar usuario por PATCH",
  },
  {
    method: "DELETE",
    path: "/api/usuarios/:id",
    description: "Eliminar usuario",
  },
  {
    method: "PATCH",
    path: "/api/usuarios/:id/deactivate",
    description: "Desactivar usuario",
  },
  {
    method: "PATCH",
    path: "/api/usuarios/:id/password",
    description: "Cambiar contraseña de usuario",
  },
  {
    method: "GET",
    path: "/api/usuarios/:id/permisos",
    description: "Consultar permisos efectivos del usuario",
  },

  // -------------------------------------------------------------------------
  // Roles — 7
  // -------------------------------------------------------------------------
  {
    method: "GET",
    path: "/api/roles",
    description: "Listar roles",
  },
  {
    method: "GET",
    path: "/api/roles/:id",
    description: "Consultar rol por ID",
  },
  {
    method: "POST",
    path: "/api/roles",
    description: "Crear rol",
  },
  {
    method: "PUT",
    path: "/api/roles/:id",
    description: "Actualizar rol por PUT",
  },
  {
    method: "PATCH",
    path: "/api/roles/:id",
    description: "Actualizar rol por PATCH",
  },
  {
    method: "DELETE",
    path: "/api/roles/:id",
    description: "Eliminar rol",
  },
  {
    method: "PATCH",
    path: "/api/roles/:id/deactivate",
    description: "Desactivar rol",
  },

  // -------------------------------------------------------------------------
  // Recursos — 7
  // -------------------------------------------------------------------------
  {
    method: "GET",
    path: "/api/recursos",
    description: "Listar recursos",
  },
  {
    method: "GET",
    path: "/api/recursos/:id",
    description: "Consultar recurso por ID",
  },
  {
    method: "POST",
    path: "/api/recursos",
    description: "Crear recurso",
  },
  {
    method: "PUT",
    path: "/api/recursos/:id",
    description: "Actualizar recurso por PUT",
  },
  {
    method: "PATCH",
    path: "/api/recursos/:id",
    description: "Actualizar recurso por PATCH",
  },
  {
    method: "DELETE",
    path: "/api/recursos/:id",
    description: "Eliminar recurso",
  },
  {
    method: "PATCH",
    path: "/api/recursos/:id/deactivate",
    description: "Desactivar recurso",
  },

  // -------------------------------------------------------------------------
  // Asignaciones usuario <-> rol — 5
  // -------------------------------------------------------------------------
  {
    method: "GET",
    path: "/api/usuarios/:id/roles",
    description: "Consultar roles asignados a un usuario",
  },
  {
    method: "POST",
    path: "/api/usuarios/:id/roles",
    description: "Asignar rol a usuario",
  },
  {
    method: "DELETE",
    path: "/api/usuarios/:id/roles/:roleId",
    description: "Retirar rol de usuario",
  },
  {
    method: "GET",
    path: "/api/roles/:id/usuarios",
    description: "Consultar usuarios asignados a un rol",
  },
  {
    method: "POST",
    path: "/api/roles/:id/usuarios",
    description: "Asignar usuario a rol",
  },

  // -------------------------------------------------------------------------
  // Concesiones rol <-> recurso — 5
  // -------------------------------------------------------------------------
  {
    method: "GET",
    path: "/api/roles/:id/recursos",
    description: "Consultar recursos asignados a un rol",
  },
  {
    method: "POST",
    path: "/api/roles/:id/recursos",
    description: "Asignar recurso a rol",
  },
  {
    method: "DELETE",
    path: "/api/roles/:id/recursos/:resourceId",
    description: "Retirar recurso de rol",
  },
  {
    method: "GET",
    path: "/api/recursos/:id/roles",
    description: "Consultar roles asignados a un recurso",
  },
  {
    method: "POST",
    path: "/api/recursos/:id/roles",
    description: "Asignar rol a recurso",
  },
];

/** Recursos que recibe el rol SELLER. */
export const SELLER_RESOURCES = RESOURCE_CATALOG.filter(
  (resource) => resource.seller === true
);
