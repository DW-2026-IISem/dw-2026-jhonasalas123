import { ResourceRole, ResourceRoleI } from "../resource-role.model";

/**
 * Respuesta HTTP de una concesión rol-recurso.
 *
 * Incluye resumen del rol y del recurso.
 */
export interface ResourceRoleResponseDto extends ResourceRoleI {
  role?: {
    id: number;
    name: string;
  } | null;

  resource?: {
    id: number;
    method: string;
    path: string;
    description: string | null;
  } | null;
}

/** Mapper modelo -> DTO de respuesta. */
export function toResourceRoleResponse(
  resourceRole: ResourceRole
): ResourceRoleResponseDto {
  return resourceRole.toJSON() as ResourceRoleResponseDto;
}

/**
 * Permiso efectivo de un usuario.
 *
 * Resultado de recorrer:
 * role_users → roles → resource_roles → resources
 */
export interface EffectivePermissionDto {
  resource_id: number;
  method: string;
  path: string;
  description: string | null;
  role_id: number;
  role_name: string;
}
