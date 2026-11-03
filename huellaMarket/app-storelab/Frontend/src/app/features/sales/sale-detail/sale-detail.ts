import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { Sale } from '../../../core/models/sale.model';
import type { SaleDetail as SaleDetailModel } from '../../../core/models/sale-detail.model';
import { Product } from '../../../core/models/product.model';

@Component({
  selector: 'app-sale-detail',
  imports: [CurrencyPipe, DatePipe],
  templateUrl: './sale-detail.html',
  styleUrl: './sale-detail.css',
})
export class SaleDetail {
  readonly sale = input.required<Sale>();
  readonly details = input<SaleDetailModel[]>([]);
  readonly products = input<Product[]>([]);

  readonly productName = computed(() => {
    const map = new Map(
      this.products().map((product) => [product.id, product.nombre]),
    );

    return (id: number) => map.get(id) ?? `Producto #${id}`;
  });

  readonly itemCount = computed(() =>
    this.details().reduce((sum, item) => sum + Number(item.cantidad), 0),
  );

  readonly detailsTotal = computed(() =>
    this.details().reduce((sum, item) => sum + Number(item.total), 0),
  );
}
