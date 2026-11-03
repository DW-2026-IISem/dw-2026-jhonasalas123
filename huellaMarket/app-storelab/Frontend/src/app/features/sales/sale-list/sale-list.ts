import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialog } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { TooltipModule } from 'primeng/tooltip';
import { Sale, SalePayload } from '../../../core/models/sale.model';
import { NotificationService } from '../../../core/services/notification';
import { toApiMessage } from '../../../core/utils/api-error';
import { filterRows } from '../../../core/utils/filter-rows';
import { EmptyState } from '../../../shared/ui/empty-state/empty-state';
import { PageHeader } from '../../../shared/ui/page-header/page-header';
import { SaleApi } from '../sale-api';
import { SaleForm } from '../sale-form/sale-form';
import { forkJoin } from 'rxjs';
import { Product } from '../../../core/models/product.model';
import { SaleDetail } from '../../../core/models/sale-detail.model';
import { ProductApi } from '../../products/product-api';
import { SaleDetailApi } from '../../sale-details/sale-detail-api';
import { SaleDetail as SaleDetailView } from '../sale-detail/sale-detail';
@Component({
  host: { class: 'block' },
  selector: 'app-sale-list',
  imports: [
    ButtonModule,
    ConfirmDialog,
    CurrencyPipe,
    DatePipe,
    DialogModule,
    EmptyState,
    InputTextModule,
    MessageModule,
    PageHeader,
    SaleForm,
    TableModule,
    TagModule,
    TooltipModule,
    SaleDetailView,
  ],
  templateUrl: './sale-list.html',
  styleUrl: './sale-list.css',
})
export class SaleList {
  private readonly api = inject(SaleApi);
  private readonly notify = inject(NotificationService);
  private readonly confirmation = inject(ConfirmationService);
  private readonly detailApi = inject(SaleDetailApi);
private readonly productApi = inject(ProductApi);

readonly detailVisible = signal(false);
readonly selectedSale = signal<Sale | null>(null);
readonly saleDetails = signal<SaleDetail[]>([]);
readonly products = signal<Product[]>([]);
readonly detailLoading = signal(false);
readonly detailError = signal<string | null>(null); 
  readonly rows = signal<Sale[]>([]);
  readonly loading = signal(true);
  readonly saving = signal(false);
  readonly error = signal<string | null>(null);
  readonly filter = signal('');

  readonly visibleRows = computed(() =>
    filterRows(this.rows(), this.filter(), (row) => [
      row.id,
      row.cliente_id,
      row.fecha,
      row.subtotal,
      row.impuestos,
      row.total,
      row.estado,
    ]),
  );

  readonly dialogVisible = signal(false);
  readonly editing = signal<Sale | null>(null);
  readonly resetKey = signal(0);

  readonly title = computed(() =>
    this.editing() ? 'Editar venta' : 'Nueva venta',
  );

  constructor() {
    this.load();
  }

  load(): void {
    this.loading.set(true);
    this.error.set(null);

    this.api.list().subscribe({
      next: (rows) => {
        this.rows.set(rows);
        this.loading.set(false);
      },
      error: (error: unknown) => {
        this.rows.set([]);
        this.error.set(toApiMessage(error));
        this.loading.set(false);
      },
    });
  }

  openCreate(): void {
    this.editing.set(null);
    this.resetKey.update((key) => key + 1);
    this.dialogVisible.set(true);
  }

  openEdit(row: Sale): void {
    this.editing.set(row);
    this.resetKey.update((key) => key + 1);
    this.dialogVisible.set(true);
  }

  save(payload: SalePayload): void {
    const current = this.editing();
    this.saving.set(true);

    const request = current
      ? this.api.update(current.id, payload)
      : this.api.create(payload);

    request.subscribe({
      next: () => {
        this.saving.set(false);
        this.dialogVisible.set(false);
        this.notify.success(
          current ? 'Venta actualizada' : 'Venta creada',
        );
        this.load();
      },
      error: (error: unknown) => {
        this.saving.set(false);
        this.notify.error('No se pudo guardar', toApiMessage(error));
      },
    });
  }
openDetail(row: Sale): void {
  this.selectedSale.set(row);
  this.saleDetails.set([]);
  this.products.set([]);
  this.detailError.set(null);
  this.detailLoading.set(true);
  this.detailVisible.set(true);

  forkJoin({
    details: this.detailApi.list(),
    products: this.productApi.list(),
  }).subscribe({
    next: ({ details, products }) => {
      this.saleDetails.set(
        details.filter((item) => item.cabecera_id === row.id),
      );
      this.products.set(products);
      this.detailLoading.set(false);
    },
    error: (error: unknown) => {
      this.detailError.set(toApiMessage(error));
      this.detailLoading.set(false);
    },
  });
}
  remove(row: Sale): void {
    this.confirmation.confirm({
      header: 'Eliminar venta',
      message: `¿Eliminar la venta ${row.id}? Esta acción no se puede deshacer.`,
      icon: 'pi pi-trash',
      acceptLabel: 'Eliminar',
      rejectLabel: 'Cancelar',
      acceptButtonStyleClass: 'p-button-danger',
      accept: () => {
        this.api.remove(row.id).subscribe({
          next: () => {
            this.notify.success('Venta eliminada');
            this.load();
          },
          error: (error: unknown) => {
            this.notify.error('No se pudo eliminar', toApiMessage(error));
          },
        });
      },
    });
  }
}
