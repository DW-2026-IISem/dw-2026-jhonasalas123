/**
 * Datos de entrada de `POST /api/sesion/refresh`.
 *
 * El refresh token viaja en el cuerpo de la petición.
 */
export interface RefreshSessionDto {
  refresh_token: string;
}
