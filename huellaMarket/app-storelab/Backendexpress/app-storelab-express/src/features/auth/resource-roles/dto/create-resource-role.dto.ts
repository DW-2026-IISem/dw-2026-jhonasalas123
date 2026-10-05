/**
 * Datos de entrada de `POST /api/concesiones-rol` — **conceder un recurso a un rol**.
 *
 * Esta operación crea un permiso: el permiso es la tupla `(role_id, resource_id)`
 * materializada en `resource_roles`.
 */
export interface CreateResourceRoleDto {
  role_id: number;
  resource_id: number;
}
