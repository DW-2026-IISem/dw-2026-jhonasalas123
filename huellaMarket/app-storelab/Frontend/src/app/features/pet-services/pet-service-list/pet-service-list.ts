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
import { PetService } from '../../../core/models/pet-service.model';
import { NotificationService } from '../../../core/services/notification';
import { toApiMessage } from '../../../core/utils/api-error';
import { filterRows } from '../../../core/utils/filter-rows';
import { EmptyState } from '../../../shared/ui/empty-state/empty-state';
import { PageHeader } from '../../../shared/ui/page-header/page-header';
import { StatusTag } from '../../../shared/ui/status-tag/status-tag';
import { PetServiceApi } from '../pet-service-api';
import { PetServiceForm } from '../pet-service-form/pet-service-form';

@Component({
  host: { class: 'block' },
  selector: 'app-pet-service-list',
  imports: [
    ButtonModule,
    ConfirmDialog,
    DialogModule,
    EmptyState,
    InputTextModule,
    MessageModule,
    PageHeader,
    StatusTag,
    TableModule,
    TagModule,
    TooltipModule,
    PetServiceForm,
  ],
  templateUrl: './pet-service-list.html',
  styleUrl: './pet-service-list.css',
})
export class PetServiceList {
  private readonly api = inject(PetServiceApi);
  private readonly notify = inject(NotificationService);
  private readonly confirmation = inject(ConfirmationService);

  readonly rows = signal<PetService[]>([]);
  readonly loading = signal(true);
  readonly saving = signal(false);
  readonly error = signal<string | null>(null);
  readonly filter = signal('');

  readonly visibleRows = computed(() =>
    filterRows(this.rows(), this.filter(), (service) => [
      service.nombre,
      service.descripcion ?? '',
    ]),
  );

  readonly activeCount = computed(
    () => this.rows().filter((service) => service.isActive).length,
  );

  readonly dialogVisible = signal(false);
  readonly editing = signal<PetService | null>(null);
  readonly resetKey = signal(0);

  readonly title = computed(() =>
    this.editing() ? 'Editar servicio' : 'Nuevo servicio',
  );

  constructor() {
    this.load();
  }

  /** GET /api/servicios-mascota */
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

  openEdit(service: PetService): void {
    this.editing.set(service);
    this.resetKey.update((key) => key + 1);
    this.dialogVisible.set(true);
  }

  save(payload: Partial<PetService>): void {
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
          current ? 'Servicio actualizado' : 'Servicio creado',
        );
        this.load();
      },
      error: (error: unknown) => {
        this.saving.set(false);
        this.notify.error('No se pudo guardar', toApiMessage(error));
      },
    });
  }

  deactivate(service: PetService): void {
    this.confirmation.confirm({
      header: 'Desactivar servicio',
      message: `¿Desactivar el servicio ${service.nombre}?`,
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Desactivar',
      rejectLabel: 'Cancelar',
      acceptButtonStyleClass: 'p-button-warning',
      accept: () => {
        this.api.deactivate(service.id).subscribe({
          next: () => {
            this.notify.warn('Servicio desactivado');
            this.load();
          },
          error: (error: unknown) => {
            this.notify.error(
              'No se pudo desactivar',
              toApiMessage(error),
            );
          },
        });
      },
    });
  }

  remove(service: PetService): void {
    this.confirmation.confirm({
      header: 'Eliminar definitivamente',
      message: `Se eliminará el servicio ${service.nombre}. Esta acción no se puede deshacer.`,
      icon: 'pi pi-trash',
      acceptLabel: 'Eliminar',
      rejectLabel: 'Cancelar',
      acceptButtonStyleClass: 'p-button-danger',
      accept: () => {
        this.api.remove(service.id).subscribe({
          next: () => {
            this.notify.success('Servicio eliminado');
            this.load();
          },
          error: (error: unknown) => {
            this.notify.error(
              'No se pudo eliminar',
              toApiMessage(error),
            );
          },
        });
      },
    });
  }
}
