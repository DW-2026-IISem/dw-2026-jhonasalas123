import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Resource } from '../../../core/models/role.model';

export interface ResourceCreate {
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  path: string;
  description?: string | null;
  status?: 'active' | 'inactive';
}

export type ResourceUpdate = Omit<ResourceCreate, 'status'>;

@Injectable({ providedIn: 'root' })
export class ResourceApi {
  private readonly http = inject(HttpClient);
  private readonly base = `${environment.apiUrl}/recursos`;

  list(): Observable<Resource[]> {
    return this.http.get<Resource[]>(this.base);
  }

  get(id: number): Observable<Resource> {
    return this.http.get<Resource>(`${this.base}/${id}`);
  }

  create(payload: ResourceCreate): Observable<Resource> {
    return this.http.post<Resource>(this.base, payload);
  }

  update(id: number, payload: Partial<ResourceUpdate>): Observable<Resource> {
    return this.http.patch<Resource>(`${this.base}/${id}`, payload);
  }

  replace(id: number, payload: ResourceUpdate): Observable<Resource> {
    return this.http.put<Resource>(`${this.base}/${id}`, payload);
  }

  deactivate(id: number): Observable<unknown> {
    return this.http.patch(`${this.base}/${id}/deactivate`, {});
  }

  remove(id: number): Observable<unknown> {
    return this.http.delete(`${this.base}/${id}`);
  }
}
