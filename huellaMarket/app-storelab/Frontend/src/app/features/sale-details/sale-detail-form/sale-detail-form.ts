import { Component, effect, inject, input, output } from '@angular/core';
import {
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import {
  SaleDetail,
  SaleDetailPayload,
} from '../../../core/models/sale-detail.model';

@Component({
  selector: 'app-sale-detail-form',
  imports: [
    ButtonModule,
    InputNumberModule,
    InputTextModule,
    ReactiveFormsModule,
  ],
  templateUrl: './sale-detail-form.html',
  styleUrl: './sale-detail-form.css',
})
export class SaleDetailForm {
  readonly saleDetail = input<SaleDetail | null>(null);
  readonly resetKey = input(0);
  readonly saving = input(false);

  readonly saved = output<SaleDetailPayload>();
  readonly cancelled = output<void>();

  private readonly fb = inject(NonNullableFormBuilder);

  readonly form = this.fb.group({
    cabecera_id: [1, [Validators.required, Validators.min(1)]],
    item_id: [1, [Validators.required, Validators.min(1)]],
    cantidad: [1, [Validators.required, Validators.min(1)]],
    valor_unitario: [0, [Validators.required, Validators.min(0)]],
    total: [0, [Validators.required, Validators.min(0)]],
    observaciones: [''],
  });

  constructor() {
    effect(() => {
      const current = this.saleDetail();
      this.resetKey();

      this.form.reset({
        cabecera_id: current?.cabecera_id ?? 1,
        item_id: current?.item_id ?? 1,
        cantidad: current?.cantidad ?? 1,
        valor_unitario: Number(current?.valor_unitario ?? 0),
        total: Number(current?.total ?? 0),
        observaciones: current?.observaciones ?? '',
      });
    });
  }

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.saved.emit(this.form.getRawValue());
  }
}
