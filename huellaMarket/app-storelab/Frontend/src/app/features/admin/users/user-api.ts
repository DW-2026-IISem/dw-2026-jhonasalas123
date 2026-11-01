import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from '../../../../environments/environment';
import {
  User,
  UserCreate,
  UserUpdate,
  UserPatch,
} from '../../../core/models/user.model';
import { ChangePasswordPayload } from '../../../core/models/auth.model';
import { Permission } from '../../../core/models/auth.model';

@Injectable({ providedIn: 'root' })
export class UserApi {
  private readonly http = inject(HttpClient);
  private readonly base = `${environment.apiUrl}/usuarios`;

  list(): Observable<User[]> {
    return this.http
      .get<{ users: User[] }>(this.base)
      .pipe(map((response) => response.users));
  }

  get(id: number): Observable<User> {
    return this.http
      .get<{ user: User }>(`${this.base}/${id}`)
      .pipe(map((response) => response.user));
  }

  create(payload: UserCreate): Observable<User> {
    return this.http
      .post<{ user: User }>(this.base, payload)
      .pipe(map((response) => response.user));
  }

  update(id: number, payload: UserPatch): Observable<User> {
    return this.http
      .patch<{ user: User }>(`${this.base}/${id}`, payload)
      .pipe(map((response) => response.user));
  }

  replace(id: number, payload: UserUpdate): Observable<User> {
    return this.http
      .put<{ user: User }>(`${this.base}/${id}`, payload)
      .pipe(map((response) => response.user));
  }

  deactivate(id: number): Observable<unknown> {
    return this.http.patch(`${this.base}/${id}/deactivate`, {});
  }

  remove(id: number): Observable<unknown> {
    return this.http.delete(`${this.base}/${id}`);
  }

  changePassword(
    id: number,
    payload: ChangePasswordPayload,
  ): Observable<unknown> {
    return this.http.patch(`${this.base}/${id}/password`, payload);
  }

  getEffectivePermissions(id: number): Observable<Permission[]> {
    return this.http
      .get<{ permissions: Permission[] }>(`${this.base}/${id}/permisos`)
      .pipe(map((response) => response.permissions));
  }
}
