export interface CatalogResource {
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  path: string;
  description: string;
  seller?: boolean;
}

function r(
  method: CatalogResource["method"],
  path: string,
  description: string,
  seller = false
): CatalogResource {
  return seller
    ? { method, path, description, seller: true }
    : { method, path, description };
}

/**
 * Catálogo de recursos protegibles por RBAC.
 * Debe coincidir 1:1 con las rutas JWT+RBAC reales.
 *
 * seller = true: operaciones de mostrador del rol SELLER (7).
 */
export const RESOURCE_CATALOG: readonly CatalogResource[] = [
  // Clientes
  r("GET", "/api/clientes", "Listar clientes", true),
  r("GET", "/api/clientes/:id", "Consultar cliente", true),
  r("POST", "/api/clientes", "Crear cliente"),
  r("PUT", "/api/clientes/:id", "Actualizar cliente"),
  r("PATCH", "/api/clientes/:id", "Actualizar parcialmente cliente"),
  r("DELETE", "/api/clientes/:id", "Eliminar cliente"),
  r("PATCH", "/api/clientes/:id/deactivate", "Desactivar cliente"),

  // Mascotas
  r("GET", "/api/mascotas", "Listar mascotas"),
  r("GET", "/api/mascotas/:id", "Consultar mascota"),
  r("POST", "/api/mascotas", "Crear mascota"),
  r("PUT", "/api/mascotas/:id", "Actualizar mascota"),
  r("PATCH", "/api/mascotas/:id", "Actualizar parcialmente mascota"),
  r("DELETE", "/api/mascotas/:id", "Eliminar mascota"),
  r("PATCH", "/api/mascotas/:id/deactivate", "Desactivar mascota"),

  // Fichas sanitarias
  r("GET", "/api/fichas-sanitarias", "Listar fichas sanitarias"),
  r("GET", "/api/fichas-sanitarias/:id", "Consultar ficha sanitaria"),
  r("POST", "/api/fichas-sanitarias", "Crear ficha sanitaria"),
  r("PUT", "/api/fichas-sanitarias/:id", "Actualizar ficha sanitaria"),
  r("PATCH", "/api/fichas-sanitarias/:id", "Actualizar parcialmente ficha sanitaria"),
  r("DELETE", "/api/fichas-sanitarias/:id", "Eliminar ficha sanitaria"),
  r("PATCH", "/api/fichas-sanitarias/:id/deactivate", "Desactivar ficha sanitaria"),

  // Servicios de mascota
  r("GET", "/api/servicios-mascota", "Listar servicios de mascota"),
  r("GET", "/api/servicios-mascota/:id", "Consultar servicio de mascota"),
  r("POST", "/api/servicios-mascota", "Crear servicio de mascota"),
  r("PUT", "/api/servicios-mascota/:id", "Actualizar servicio de mascota"),
  r("PATCH", "/api/servicios-mascota/:id", "Actualizar parcialmente servicio de mascota"),
  r("DELETE", "/api/servicios-mascota/:id", "Eliminar servicio de mascota"),
  r("PATCH", "/api/servicios-mascota/:id/deactivate", "Desactivar servicio de mascota"),

  // Citas
  r("GET", "/api/citas-servicio", "Listar citas de servicio"),
  r("GET", "/api/citas-servicio/:id", "Consultar cita de servicio"),
  r("POST", "/api/citas-servicio", "Crear cita de servicio"),
  r("PUT", "/api/citas-servicio/:id", "Actualizar cita de servicio"),
  r("PATCH", "/api/citas-servicio/:id", "Actualizar parcialmente cita de servicio"),
  r("DELETE", "/api/citas-servicio/:id", "Eliminar cita de servicio"),
  r("PATCH", "/api/citas-servicio/:id/deactivate", "Desactivar cita de servicio"),

  // Productos
  r("GET", "/api/productos", "Listar productos", true),
  r("GET", "/api/productos/:id", "Consultar producto", true),
  r("POST", "/api/productos", "Crear producto"),
  r("PUT", "/api/productos/:id", "Actualizar producto"),
  r("PATCH", "/api/productos/:id", "Actualizar parcialmente producto"),
  r("DELETE", "/api/productos/:id", "Eliminar producto"),
  r("PATCH", "/api/productos/:id/deactivate", "Desactivar producto"),

  // Proveedores
  r("GET", "/api/proveedores", "Listar proveedores"),
  r("GET", "/api/proveedores/:id", "Consultar proveedor"),
  r("POST", "/api/proveedores", "Crear proveedor"),
  r("PUT", "/api/proveedores/:id", "Actualizar proveedor"),
  r("PATCH", "/api/proveedores/:id", "Actualizar parcialmente proveedor"),
  r("DELETE", "/api/proveedores/:id", "Eliminar proveedor"),
  r("PATCH", "/api/proveedores/:id/deactivate", "Desactivar proveedor"),

  // Inventario
  r("GET", "/api/inventarios", "Listar inventarios"),
  r("GET", "/api/inventarios/:id", "Consultar inventario"),
  r("POST", "/api/inventarios", "Crear inventario"),
  r("PUT", "/api/inventarios/:id", "Actualizar inventario"),
  r("PATCH", "/api/inventarios/:id", "Actualizar parcialmente inventario"),
  r("DELETE", "/api/inventarios/:id", "Eliminar inventario"),

  // Ventas
  r("GET", "/api/ventas", "Listar ventas", true),
  r("GET", "/api/ventas/:id", "Consultar venta", true),
  r("POST", "/api/ventas", "Registrar venta", true),
  r("PUT", "/api/ventas/:id", "Actualizar venta"),
  r("PATCH", "/api/ventas/:id", "Actualizar parcialmente venta"),
  r("DELETE", "/api/ventas/:id", "Eliminar venta"),

  // Detalle de ventas
  r("GET", "/api/venta-detalles", "Listar detalles de venta"),
  r("GET", "/api/venta-detalles/:id", "Consultar detalle de venta"),
  r("POST", "/api/venta-detalles", "Crear detalle de venta"),
  r("PUT", "/api/venta-detalles/:id", "Actualizar detalle de venta"),
  r("PATCH", "/api/venta-detalles/:id", "Actualizar parcialmente detalle de venta"),
  r("DELETE", "/api/venta-detalles/:id", "Eliminar detalle de venta"),

  // Pagos
  r("GET", "/api/pagos", "Listar pagos"),
  r("GET", "/api/pagos/:id", "Consultar pago"),
  r("POST", "/api/pagos", "Registrar pago"),
  r("PUT", "/api/pagos/:id", "Actualizar pago"),
  r("PATCH", "/api/pagos/:id", "Actualizar parcialmente pago"),
  r("DELETE", "/api/pagos/:id", "Eliminar pago"),

  // Usuarios
  r("GET", "/api/usuarios", "Listar usuarios"),
  r("GET", "/api/usuarios/:id", "Consultar usuario"),
  r("POST", "/api/usuarios", "Crear usuario"),
  r("PUT", "/api/usuarios/:id", "Actualizar usuario"),
  r("PATCH", "/api/usuarios/:id", "Actualizar parcialmente usuario"),
  r("DELETE", "/api/usuarios/:id", "Eliminar usuario"),
  r("PATCH", "/api/usuarios/:id/deactivate", "Desactivar usuario"),
  r("PATCH", "/api/usuarios/:id/password", "Cambiar contraseña"),
  r("GET", "/api/usuarios/:id/permisos", "Consultar permisos efectivos"),

  // Roles
  r("GET", "/api/roles", "Listar roles"),
  r("GET", "/api/roles/:id", "Consultar rol"),
  r("POST", "/api/roles", "Crear rol"),
  r("PUT", "/api/roles/:id", "Actualizar rol"),
  r("PATCH", "/api/roles/:id", "Actualizar parcialmente rol"),
  r("DELETE", "/api/roles/:id", "Eliminar rol"),
  r("PATCH", "/api/roles/:id/deactivate", "Desactivar rol"),

  // Recursos
  r("GET", "/api/recursos", "Listar recursos"),
  r("GET", "/api/recursos/:id", "Consultar recurso"),
  r("POST", "/api/recursos", "Crear recurso"),
  r("PUT", "/api/recursos/:id", "Actualizar recurso"),
  r("PATCH", "/api/recursos/:id", "Actualizar parcialmente recurso"),
  r("DELETE", "/api/recursos/:id", "Eliminar recurso"),
  r("PATCH", "/api/recursos/:id/deactivate", "Desactivar recurso"),

  // Asignaciones usuario-rol
  r("GET", "/api/asignaciones-rol", "Listar asignaciones usuario-rol"),
  r("GET", "/api/asignaciones-rol/:id", "Consultar asignación usuario-rol"),
  r("POST", "/api/asignaciones-rol", "Asignar rol a usuario"),
  r("PATCH", "/api/asignaciones-rol/:id/deactivate", "Retirar rol de usuario"),
  r("PATCH", "/api/asignaciones-rol/:id/reactivate", "Reactivar rol de usuario"),

  // Concesiones rol-recurso
  r("GET", "/api/concesiones-rol", "Listar concesiones rol-recurso"),
  r("GET", "/api/concesiones-rol/:id", "Consultar concesión rol-recurso"),
  r("POST", "/api/concesiones-rol", "Conceder recurso a rol"),
  r("PATCH", "/api/concesiones-rol/:id/deactivate", "Revocar recurso de rol"),
  r("PATCH", "/api/concesiones-rol/:id/reactivate", "Reactivar recurso de rol"),
];

/** Recursos permitidos para SELLER (mostrador). */
export const SELLER_RESOURCES = RESOURCE_CATALOG.filter(
  (resource) => resource.seller === true
);

if (SELLER_RESOURCES.length !== 7) {
  throw new Error(
    `SELLER_RESOURCES debe contener 7 recursos; contiene ${SELLER_RESOURCES.length}`
  );
}
