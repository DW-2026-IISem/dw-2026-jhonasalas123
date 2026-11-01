export interface Provider {
  id: number;
  nit: string;
  razon_social: string;
  contacto: string | null;
  telefono: string | null;
  email: string | null;
  isActive: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface ProviderResponse {
  provider: Provider;
}

export interface ProvidersResponse {
  providers: Provider[];
}
