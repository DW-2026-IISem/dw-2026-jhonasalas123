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
import { HealthRecord } from '../../../core/models/health-record.model';
import { NotificationService } from '../../../core/services/notification';
import { toApiMessage } from '../../../core/utils/api-error';
import { filterRows } from '../../../core/utils/filter-rows';
import { EmptyState } from '../../../shared/ui/empty-state/empty-state';
import { PageHeader } from '../../../shared/ui/page-header/page-header';
import { StatusTag } from '../../../shared/ui/status-tag/status-tag';
import { HealthRecordApi } from '../health-record-api';
import { HealthRecordForm } from '../health-record-form/health-record-form';

@Component({
  host: { class: 'block' },
  selector: 'app-health-record-list',
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
    HealthRecordForm,
  ],
  templateUrl: './health-record-list.html',
  styleUrl: './health-record-list.css',
})
export class HealthRecordList {
  private readonly api = inject(HealthRecordApi);
  private readonly notify = inject(NotificationService);
  private readonly confirmation = inject(ConfirmationService);

  readonly rows = signal<HealthRecord[]>([]);
  readonly loading = signal(true);
  readonly saving = signal(false);
  readonly error = signal<string | null>(null);
  readonly filter = signal('');

  readonly visibleRows = computed(() =>
    filterRows(this.rows(), this.filter(), (record) => [
      record.nombre,
      record.descripcion ?? '',
    ]),
  );

  readonly dialogVisible = signal(false);
  readonly editing = signal<HealthRecord | null>(null);
  readonly resetKey = signal(0);

  readonly title = computed(() =>
    this.editing() ? 'Editar ficha sanitaria' : 'Nueva ficha sanitaria',
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

  openEdit(record: HealthRecord): void {
    this.editing.set(record);
    this.resetKey.update((key) => key + 1);
    this.dialogVisible.set(true);
  }

  save(payload: Partial<HealthRecord>): void {
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
          current ? 'Ficha sanitaria actualizada' : 'Ficha sanitaria creada',
        );
        this.load();
      },
      error: (error: unknown) => {
        this.saving.set(false);
        this.notify.error('No se pudo guardar', toApiMessage(error));
      },
    });
  }

  deactivate(record: HealthRecord): void {
    this.confirmation.confirm({
      header: 'Baja lógica',
      message: `¿Desactivar la ficha sanitaria ${record.nombre}?`,
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Desactivar',
      rejectLabel: 'Cancelar',
      acceptButtonStyleClass: 'p-button-warning',
      accept: () => {
        this.api.deactivate(record.id).subscribe({
          next: () => {
            this.notify.warn('Ficha sanitaria desactivada');
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

  remove(record: HealthRecord): void {
    this.confirmation.confirm({
      header: 'Eliminar definitivamente',
      message: `Se eliminará ${record.nombre} de la base de datos.`,
      icon: 'pi pi-trash',
      acceptLabel: 'Eliminar',
      rejectLabel: 'Cancelar',
      acceptButtonStyleClass: 'p-button-danger',
      accept: () => {
        this.api.remove(record.id).subscribe({
          next: () => {
            this.notify.success('Ficha sanitaria eliminada');
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
