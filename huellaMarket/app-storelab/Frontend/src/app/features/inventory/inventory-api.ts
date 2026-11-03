import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from '../../../environments/environment';
import {
  Inventory,
  InventoryResponse,
  InventoriesResponse,
} from '../../core/models/inventory.model';

/** /api/inventario — API de inventario de HuellaMarket. */
@Injectable({ providedIn: 'root' })
export class InventoryApi {
  private readonly http = inject(HttpClient);
  private readonly base = `${environment.apiUrl}/inventarios`;

  list(): Observable<Inventory[]> {
    return this.http
      .get<InventoriesResponse>(this.base)
      .pipe(map((response) => response.inventories));
  }

  get(id: number): Observable<Inventory> {
    return this.http
      .get<InventoryResponse>(`${this.base}/${id}`)
      .pipe(map((response) => response.inventory));
  }

  create(payload: Partial<Inventory>): Observable<Inventory> {
    return this.http
      .post<InventoryResponse>(this.base, payload)
      .pipe(map((response) => response.inventory));
  }

  update(id: number, payload: Partial<Inventory>): Observable<Inventory> {
    return this.http
      .patch<InventoryResponse>(`${this.base}/${id}`, payload)
      .pipe(map((response) => response.inventory));
  }

  remove(id: number): Observable<unknown> {
    return this.http.delete(`${this.base}/${id}`);
  }
}
