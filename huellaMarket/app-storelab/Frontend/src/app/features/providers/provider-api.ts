import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Provider, ProviderPayload } from '../../core/models/provider.model';

/** /api/proveedores — la respuesta usa snake_case `providers`. */
@Injectable({ providedIn: 'root' })
export class ProviderApi {
  private readonly http = inject(HttpClient);
  private readonly base = `${environment.apiUrl}/proveedores`;

  list(): Observable<Provider[]> {
    return this.http
      .get<{ providers: Provider[] }>(this.base)
      .pipe(map((response) => response.providers));
  }

  get(id: number): Observable<Provider> {
    return this.http
      .get<{ provider: Provider }>(`${this.base}/${id}`)
      .pipe(map((response) => response.provider));
  }

  create(payload: ProviderPayload): Observable<Provider> {
    return this.http
      .post<{ provider: Provider }>(this.base, payload)
      .pipe(map((response) => response.provider));
  }

  update(id: number, payload: Partial<ProviderPayload>): Observable<Provider> {
    return this.http
      .patch<{ provider: Provider }>(`${this.base}/${id}`, payload)
      .pipe(map((response) => response.provider));
  }

  deactivate(id: number): Observable<unknown> {
    return this.http.patch(`${this.base}/${id}/deactivate`, {});
  }

  remove(id: number): Observable<unknown> {
    return this.http.delete(`${this.base}/${id}`);
  }
}
