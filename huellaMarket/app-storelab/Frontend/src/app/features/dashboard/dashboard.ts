import { Component, computed, inject, signal } from '@angular/core';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { forkJoin } from 'rxjs';

import { Client } from '../../core/models/client.model';
import { Product } from '../../core/models/product.model';
import { Sale } from '../../core/models/sale.model';
import { Inventory } from '../../core/models/inventory.model';

import { ClientApi } from '../clients/client-api';
import { ProductApi } from '../products/product-api';
import { SaleApi } from '../sales/sale-api';
import { InventoryApi } from '../inventory/inventory-api';

@Component({
  selector: 'app-dashboard',
  imports: [CurrencyPipe, DatePipe],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  private readonly clientsApi = inject(ClientApi);
  private readonly productsApi = inject(ProductApi);
  private readonly salesApi = inject(SaleApi);
  private readonly inventoryApi = inject(InventoryApi);

  readonly loading = signal(true);
  readonly error = signal<string | null>(null);

  readonly clients = signal<Client[]>([]);
  readonly products = signal<Product[]>([]);
  readonly sales = signal<Sale[]>([]);
  readonly inventories = signal<Inventory[]>([]);

  readonly lowStock = computed(() =>
    this.inventories().filter(
      (item) => Number(item.cantidad) <= Number(item.stock_minimo),
    ),
  );

  readonly revenue = computed(() =>
    this.sales().reduce((sum, sale) => sum + toNumber(sale.total), 0),
  );

  readonly latestSales = computed(() =>
    [...this.sales()]
      .sort(
        (a, b) =>
          new Date(b.fecha).getTime() - new Date(a.fecha).getTime(),
      )
      .slice(0, 5),
  );

  constructor() {
    this.load();
  }

  load(): void {
    this.loading.set(true);
    this.error.set(null);

    forkJoin({
      clients: this.clientsApi.list(),
      products: this.productsApi.list(),
      sales: this.salesApi.list(),
      inventories: this.inventoryApi.list(),
    }).subscribe({
      next: ({ clients, products, sales, inventories }) => {
        this.clients.set(clients);
        this.products.set(products);
        this.sales.set(sales);
        this.inventories.set(inventories);
        this.loading.set(false);
      },
      error: (error: unknown) => {
        this.error.set(
          error instanceof Error
            ? error.message
            : 'No fue posible cargar los datos del dashboard.',
        );
        this.loading.set(false);
      },
    });
  }
}

export function toNumber(
  value: number | string | null | undefined,
): number {
  if (value === null || value === undefined) {
    return 0;
  }

  return typeof value === 'number'
    ? value
    : Number.parseFloat(value) || 0;
}
