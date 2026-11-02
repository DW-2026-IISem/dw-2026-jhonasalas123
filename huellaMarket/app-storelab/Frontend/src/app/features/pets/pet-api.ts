import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Pet, PetPayload } from '../../core/models/pet.model';

/** /api/mascotas — la respuesta usa snake_case `pets` y `pet`. */
@Injectable({ providedIn: 'root' })
export class PetApi {
  private readonly http = inject(HttpClient);
  private readonly base = `${environment.apiUrl}/mascotas`;

  list(): Observable<Pet[]> {
    return this.http
      .get<{ pets: Pet[] }>(this.base)
      .pipe(map((response) => response.pets));
  }

  get(id: number): Observable<Pet> {
    return this.http
      .get<{ pet: Pet }>(`${this.base}/${id}`)
      .pipe(map((response) => response.pet));
  }

  create(payload: PetPayload): Observable<Pet> {
    return this.http
      .post<{ pet: Pet }>(this.base, payload)
      .pipe(map((response) => response.pet));
  }

  update(id: number, payload: Partial<PetPayload>): Observable<Pet> {
    return this.http
      .patch<{ pet: Pet }>(`${this.base}/${id}`, payload)
      .pipe(map((response) => response.pet));
  }

  replace(id: number, payload: PetPayload): Observable<Pet> {
    return this.http
      .put<{ pet: Pet }>(`${this.base}/${id}`, payload)
      .pipe(map((response) => response.pet));
  }

  deactivate(id: number): Observable<unknown> {
    return this.http.patch(`${this.base}/${id}/deactivate`, {});
  }

  remove(id: number): Observable<unknown> {
    return this.http.delete(`${this.base}/${id}`);
  }
}
