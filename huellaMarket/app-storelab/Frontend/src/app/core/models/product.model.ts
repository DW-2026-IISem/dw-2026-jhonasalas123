import type { Money } from './api.model';

export interface Product {
  id: number;
  sku: string;
  nombre: string;
  descripcion: string | null;
  precio: Money;
  isActive: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface ProductPayload {
  sku: string;
  nombre: string;
  descripcion?: string | null;
  precio: Money;
  isActive?: boolean;
}

export interface ProductResponse {
  product: Product;
}

export interface ProductsResponse {
  products: Product[];
}
