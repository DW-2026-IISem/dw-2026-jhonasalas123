/**
 * Respuesta de login y refresh.
 *
 * Contiene el par de tokens de la sesión.
 */
export interface SessionTokensDto {
  access_token: string;
  token_type: "Bearer";
  expires_in: number;
  refresh_token: string;
  refresh_expires_in: number;
}

/**
 * Datos públicos del perfil propio.
 *
 * Nunca incluye password.
 */
export interface ProfileDto {
  id: number;
  username: string;
  email: string;
  avatar: string | null;
  status: "active" | "inactive";
}
