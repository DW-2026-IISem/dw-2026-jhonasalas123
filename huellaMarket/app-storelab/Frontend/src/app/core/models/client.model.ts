export interface Client {
  id: number;
  tipo_documento: string;
  numero_documento: string;
  nombre: string;
  telefono: string;
  email: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface ClientPayload {
  tipo_documento: string;
  numero_documento: string;
  nombre: string;
  telefono?: string;
  email?: string;
}

export interface ClientResponse {
  client: Client;
}

export interface ClientsResponse {
  clients: Client[];
}
