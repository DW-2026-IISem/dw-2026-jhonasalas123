import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from '../../../environments/environment';
import { PetService } from '../../core/models/pet-service.model';

/** /api/servicios-mascota — Catálogo de servicios para mascotas. */
@Injectable({ providedIn: 'root' })
export class PetServiceApi {
  private readonly http = inject(HttpClient);
  private readonly base = `${environment.apiUrl}/servicios-mascota`;

  list(): Observable<PetService[]> {
    return this.http
      .get<{ pet_services: PetService[] }>(this.base)
      .pipe(map((response) => response.pet_services));
  }

  get(id: number): Observable<PetService> {
    return this.http
      .get<{ pet_service: PetService }>(`${this.base}/${id}`)
      .pipe(map((response) => response.pet_service));
  }

  create(payload: Partial<PetService>): Observable<PetService> {
    return this.http
      .post<{ pet_service: PetService }>(this.base, payload)
      .pipe(map((response) => response.pet_service));
  }

  update(id: number, payload: Partial<PetService>): Observable<PetService> {
    return this.http
      .patch<{ pet_service: PetService }>(`${this.base}/${id}`, payload)
      .pipe(map((response) => response.pet_service));
  }

  deactivate(id: number): Observable<unknown> {
    return this.http.patch(`${this.base}/${id}/deactivate`, {});
  }

  remove(id: number): Observable<unknown> {
    return this.http.delete(`${this.base}/${id}`);
  }
}
