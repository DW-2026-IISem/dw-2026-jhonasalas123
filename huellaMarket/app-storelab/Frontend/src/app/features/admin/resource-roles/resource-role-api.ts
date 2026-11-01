import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { ResourceRole } from '../../../core/models/role.model';

export interface ResourceRoleCreate {
  role_id: number;
  resource_id: number;
}

@Injectable({ providedIn: 'root' })
export class ResourceRoleApi {
  private readonly http = inject(HttpClient);
  private readonly base = `${environment.apiUrl}/concesiones-rol`;

  list(filters?: { role_id?: number; resource_id?: number }): Observable<ResourceRole[]> {
    let params = new HttpParams();

    if (filters?.role_id !== undefined) {
      params = params.set('role_id', filters.role_id);
    }
    if (filters?.resource_id !== undefined) {
      params = params.set('resource_id', filters.resource_id);
    }

    return this.http.get<{ grants: ResourceRole[] }>(this.base, { params })
      .pipe(map(response => response.grants));
  }

  get(id: number): Observable<ResourceRole> {
    return this.http.get<{ grant: ResourceRole }>(`${this.base}/${id}`)
      .pipe(map(response => response.grant));
  }

  grant(payload: ResourceRoleCreate): Observable<ResourceRole> {
    return this.http.post<{ grant: ResourceRole }>(this.base, payload)
      .pipe(map(response => response.grant));
  }

  deactivate(id: number): Observable<unknown> {
    return this.http.patch(`${this.base}/${id}/deactivate`, {});
  }

  reactivate(id: number): Observable<unknown> {
    return this.http.patch(`${this.base}/${id}/reactivate`, {});
  }
}
