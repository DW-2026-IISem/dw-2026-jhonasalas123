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
import { Provider, ProviderPayload } from '../../../core/models/provider.model';
import { NotificationService } from '../../../core/services/notification';
import { toApiMessage } from '../../../core/utils/api-error';
import { filterRows } from '../../../core/utils/filter-rows';
import { EmptyState } from '../../../shared/ui/empty-state/empty-state';
import { PageHeader } from '../../../shared/ui/page-header/page-header';
import { ProviderApi } from '../provider-api';
import { ProviderForm } from '../provider-form/provider-form';

@Component({
  host: { class: 'block' },
  selector: 'app-provider-list',
  imports: [
    ButtonModule,
    ConfirmDialog,
    DialogModule,
    EmptyState,
    InputTextModule,
    MessageModule,
    PageHeader,
    TableModule,
    TagModule,
    TooltipModule,
    ProviderForm,
  ],
  templateUrl: './provider-list.html',
  styleUrl: './provider-list.css',
})
export class ProviderList {
  private readonly api = inject(ProviderApi);
  private readonly notify = inject(NotificationService);
  private readonly confirmation = inject(ConfirmationService);

  readonly rows = signal<Provider[]>([]);
  readonly loading = signal(true);
  readonly saving = signal(false);
  readonly error = signal<string | null>(null);
  readonly filter = signal('');

  readonly visibleRows = computed(() =>
    filterRows(this.rows(), this.filter(), (row) => [
      row.nit,
      row.razonSocial,
      row.contacto,
      row.telefono,
      row.email,
    ]),
  );

  readonly activeCount = computed(() =>
    this.rows().filter((row) => row.isActive).length,
  );

  readonly dialogVisible = signal(false);
  readonly editing = signal<Provider | null>(null);
  readonly resetKey = signal(0);

  readonly title = computed(() =>
    this.editing() ? 'Editar proveedor' : 'Nuevo proveedor',
  );

  constructor() {
    this.load();
  }

  /** GET /api/proveedores */
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

  openEdit(provider: Provider): void {
    this.editing.set(provider);
    this.resetKey.update((key) => key + 1);
    this.dialogVisible.set(true);
  }

  save(payload: ProviderPayload): void {
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
          current ? 'Proveedor actualizado' : 'Proveedor creado',
        );
        this.load();
      },
      error: (error: unknown) => {
        this.saving.set(false);
        this.notify.error('No se pudo guardar', toApiMessage(error));
      },
    });
  }

  /** Baja lógica: PATCH /:id/deactivate. */
  deactivate(provider: Provider): void {
    this.confirmation.confirm({
      header: 'Desactivar proveedor',
      message: `¿Desactivar el proveedor ${provider.razonSocial}?`,
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Desactivar',
      rejectLabel: 'Cancelar',
      acceptButtonStyleClass: 'p-button-warning',
      accept: () => {
        this.api.deactivate(provider.id).subscribe({
          next: () => {
            this.notify.warn('Proveedor desactivado');
            this.load();
          },
          error: (error: unknown) => {
            this.notify.error('No se pudo desactivar', toApiMessage(error));
          },
        });
      },
    });
  }
}
