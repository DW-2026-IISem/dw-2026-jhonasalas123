export interface LoginPayload {
  identifier: string;
  password: string;
}

export interface RefreshTokenPayload {
  refresh_token: string;
}

export interface SessionTokens {
  access_token: string;
  token_type: string;
  expires_in: number;
  refresh_token: string;
  refresh_expires_in: number;
}

export interface Permission {
  method: string;
  path: string;
}

export interface PermissionsResponse {
  permissions: Permission[];
}

export interface ChangePasswordPayload {
  current_password: string;
  new_password: string;
}
