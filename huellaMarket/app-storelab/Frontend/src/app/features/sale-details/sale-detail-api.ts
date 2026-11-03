import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from '../../../environments/environment';
import {
  SaleDetail,
  SaleDetailPayload,
} from '../../core/models/sale-detail.model';

/** /api/venta-detalles */
@Injectable({ providedIn: 'root' })
export class SaleDetailApi {
  private readonly http = inject(HttpClient);
  private readonly base = `${environment.apiUrl}/venta-detalles`;

  list(): Observable<SaleDetail[]> {
    return this.http
      .get<{ saleDetails: SaleDetail[] }>(this.base)
      .pipe(map((response) => response.saleDetails));
  }

  get(id: number): Observable<SaleDetail> {
    return this.http
      .get<{ saleDetail: SaleDetail }>(`${this.base}/${id}`)
      .pipe(map((response) => response.saleDetail));
  }

  create(payload: SaleDetailPayload): Observable<SaleDetail> {
    return this.http
      .post<{ saleDetail: SaleDetail }>(this.base, payload)
      .pipe(map((response) => response.saleDetail));
  }

  update(
    id: number,
    payload: Partial<SaleDetailPayload>,
  ): Observable<SaleDetail> {
    return this.http
      .patch<{ saleDetail: SaleDetail }>(`${this.base}/${id}`, payload)
      .pipe(map((response) => response.saleDetail));
  }

  remove(id: number): Observable<unknown> {
    return this.http.delete(`${this.base}/${id}`);
  }
}
