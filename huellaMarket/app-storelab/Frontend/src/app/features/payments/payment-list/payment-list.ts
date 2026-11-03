import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialog } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { ConfirmationService } from 'primeng/api';
import { Payment, PaymentPayload } from '../../../core/models/payment.model';
import { PaymentApi } from '../payment-api';
import { PaymentForm } from '../payment-form/payment-form';
import { NotificationService } from '../../../core/services/notification';
import { PageHeader } from '../../../shared/ui/page-header/page-header';
import { EmptyState } from '../../../shared/ui/empty-state/empty-state';
import { filterRows } from '../../../core/utils/filter-rows';
import { toApiMessage } from '../../../core/utils/api-error';

@Component({
  selector: 'app-payment-list',
  standalone: true,
  imports: [
    FormsModule,
    ButtonModule,
    ConfirmDialog,
    DialogModule,
    InputTextModule,
    TableModule,
    CurrencyPipe,
    DatePipe,
    PaymentForm,
    PageHeader,
    EmptyState,
  ],
  providers: [ConfirmationService],
  templateUrl: './payment-list.html',
})
export class PaymentList {
  private readonly api = inject(PaymentApi);
  private readonly notifications = inject(NotificationService);
  private readonly confirmation = inject(ConfirmationService);

  readonly payments = signal<Payment[]>([]);
  readonly loading = signal(false);
  readonly dialogVisible = signal(false);
  readonly selectedPayment = signal<Payment | null>(null);
  readonly search = signal('');

  readonly filteredPayments = () =>
    filterRows(this.payments(), this.search());

  readonly title = () =>
    this.selectedPayment() ? 'Editar pago' : 'Nuevo pago';

  constructor() {
    this.load();
  }

  load(): void {
    this.loading.set(true);

    this.api.list().subscribe({
      next: (payments) => {
        this.payments.set(payments);
        this.loading.set(false);
      },
      error: (error) => {
        this.notifications.error(toApiMessage(error));
        this.loading.set(false);
      },
    });
  }

  openCreate(): void {
    this.selectedPayment.set(null);
    this.dialogVisible.set(true);
  }

  openEdit(payment: Payment): void {
    this.selectedPayment.set(payment);
    this.dialogVisible.set(true);
  }

  save(payload: PaymentPayload): void {
    const payment = this.selectedPayment();

    const request = payment
      ? this.api.update(payment.id, payload)
      : this.api.create(payload);

    request.subscribe({
      next: () => {
        this.notifications.success(
          payment ? 'Pago actualizado correctamente' : 'Pago creado correctamente',
        );
        this.dialogVisible.set(false);
        this.load();
      },
      error: (error) => {
        this.notifications.error(toApiMessage(error));
      },
    });
  }

  remove(payment: Payment): void {
    this.confirmation.confirm({
      message: `¿Deseas eliminar el pago #${payment.id}?`,
      header: 'Confirmar eliminación',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.api.remove(payment.id).subscribe({
          next: () => {
            this.notifications.success('Pago eliminado correctamente');
            this.load();
          },
          error: (error) => {
            this.notifications.error(toApiMessage(error));
          },
        });
      },
    });
  }
}
