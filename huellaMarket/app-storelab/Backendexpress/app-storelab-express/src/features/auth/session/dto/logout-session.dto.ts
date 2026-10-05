/**
 * Datos de entrada de `POST /api/sesion/logout`.
 *
 * Se envía el refresh token que se quiere revocar.
 */
export interface LogoutSessionDto {
  refresh_token: string;
}
