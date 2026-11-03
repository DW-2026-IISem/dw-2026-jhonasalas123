import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ServiceAppointment } from '../../core/models/service-appointment.model';

/** /api/citas-servicio — la respuesta usa snake_case. */
@Injectable({ providedIn: 'root' })
export class ServiceAppointmentApi {
  private readonly http = inject(HttpClient);
  private readonly base = `${environment.apiUrl}/citas-servicio`;

  list(): Observable<ServiceAppointment[]> {
    return this.http
      .get<{ service_appointments: ServiceAppointment[] }>(this.base)
      .pipe(map((response) => response.service_appointments));
  }

  get(id: number): Observable<ServiceAppointment> {
    return this.http
      .get<{ service_appointment: ServiceAppointment }>(`${this.base}/${id}`)
      .pipe(map((response) => response.service_appointment));
  }

  create(payload: Partial<ServiceAppointment>): Observable<ServiceAppointment> {
    return this.http
      .post<{ service_appointment: ServiceAppointment }>(this.base, payload)
      .pipe(map((response) => response.service_appointment));
  }

  update(
    id: number,
    payload: Partial<ServiceAppointment>,
  ): Observable<ServiceAppointment> {
    return this.http
      .patch<{ service_appointment: ServiceAppointment }>(
        `${this.base}/${id}`,
        payload,
      )
      .pipe(map((response) => response.service_appointment));
  }

  deactivate(id: number): Observable<unknown> {
    return this.http.patch(`${this.base}/${id}/deactivate`, {});
  }

  remove(id: number): Observable<unknown> {
    return this.http.delete(`${this.base}/${id}`);
  }
}
