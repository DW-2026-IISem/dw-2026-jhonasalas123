import type { Status } from './api.model';

export interface Role {
  id: number;
  name: string;
  description: string | null;
  status: Status;
  createdAt?: string;
  updatedAt?: string;
}

export interface RoleUser {
  id: number;
  user_id: number;
  role_id: number;
  status: Status;
  createdAt?: string;
  updatedAt?: string;
}

export interface Resource {
  id: number;
  method: string;
  path: string;
  description: string | null;
  status: Status;
  createdAt?: string;
  updatedAt?: string;
}

export interface ResourceRole {
  id: number;
  role_id: number;
  resource_id: number;
  status: Status;
  createdAt?: string;
  updatedAt?: string;
}
