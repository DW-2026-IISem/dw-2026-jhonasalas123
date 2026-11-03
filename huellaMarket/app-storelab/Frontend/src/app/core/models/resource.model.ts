import type { Status } from './api.model';

export type HttpMethod =
  | 'GET'
  | 'POST'
  | 'PUT'
  | 'PATCH'
  | 'DELETE';

export interface Resource {
  id: number;
  method: HttpMethod;
  path: string;
  description: string | null;
  status: Status;
  createdAt?: string;
  updatedAt?: string;
}
