import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HealthRecord } from '../../core/models/health-record.model';

/** API de fichas sanitarias de HuellaMarket. */
@Injectable({ providedIn: 'root' })
export class HealthRecordApi {
  private readonly http = inject(HttpClient);
  private readonly base = `${environment.apiUrl}/fichas-sanitarias`;

  list(): Observable<HealthRecord[]> {
    return this.http
      .get<{ health_records: HealthRecord[] }>(this.base)
      .pipe(map((response) => response.health_records));
  }

  get(id: number): Observable<HealthRecord> {
    return this.http
      .get<{ health_record: HealthRecord }>(`${this.base}/${id}`)
      .pipe(map((response) => response.health_record));
  }

  create(payload: Partial<HealthRecord>): Observable<HealthRecord> {
    return this.http
      .post<{ health_record: HealthRecord }>(this.base, payload)
      .pipe(map((response) => response.health_record));
  }

  update(id: number, payload: Partial<HealthRecord>): Observable<HealthRecord> {
    return this.http
      .patch<{ health_record: HealthRecord }>(`${this.base}/${id}`, payload)
      .pipe(map((response) => response.health_record));
  }

  deactivate(id: number): Observable<unknown> {
    return this.http.patch(`${this.base}/${id}/deactivate`, {});
  }

  remove(id: number): Observable<unknown> {
    return this.http.delete(`${this.base}/${id}`);
  }
}
