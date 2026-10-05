/**
 * Datos de entrada de `POST /api/sesion/login`.
 *
 * `identifier` acepta usuario o correo.
 */
export interface LoginDto {
  identifier: string;
  password: string;
}
