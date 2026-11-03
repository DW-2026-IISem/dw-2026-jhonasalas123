export interface Provider {
  id: number;
  nit: string;
  razonSocial: string;
  contacto: string | null;
  telefono: string | null;
  email: string | null;
  isActive: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface ProviderPayload {
  nit: string;
  razonSocial: string;
  contacto?: string | null;
  telefono?: string | null;
  email?: string | null;
  isActive?: boolean;
}

export interface ProviderResponse {
  provider: Provider;
}

export interface ProvidersResponse {
  providers: Provider[];
}
