import { Component, effect, inject, input, output } from '@angular/core';
import {
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { Sale, SalePayload } from '../../../core/models/sale.model';

@Component({
  host: { class: 'block' },
  selector: 'app-sale-form',
  imports: [
    ButtonModule,
    InputNumberModule,
    InputTextModule,
    ReactiveFormsModule,
  ],
  templateUrl: './sale-form.html',
  styleUrl: './sale-form.css',
})
export class SaleForm {
  readonly sale = input<Sale | null>(null);
  readonly resetKey = input(0);
  readonly saving = input(false);

  readonly saved = output<SalePayload>();
  readonly cancelled = output<void>();

  private readonly fb = inject(NonNullableFormBuilder);

  private nowLocal(): string {
    const date = new Date();
    date.setMinutes(date.getMinutes() - date.getTimezoneOffset());
    return date.toISOString().slice(0, 16);
  }

  readonly form = this.fb.group({
    cliente_id: [1, [Validators.required, Validators.min(1)]],
    fecha: [this.nowLocal(), Validators.required],
    subtotal: [0, [Validators.required, Validators.min(0)]],
    impuestos: [0, [Validators.required, Validators.min(0)]],
    total: [0, [Validators.required, Validators.min(0)]],
    estado: ['pendiente', Validators.required],
  });

  constructor() {
    effect(() => {
      const current = this.sale();
      this.resetKey();

      this.form.reset({
        cliente_id: current?.cliente_id ?? 1,
        fecha: current?.fecha
          ? current.fecha.slice(0, 16)
          : this.nowLocal(),
        subtotal: Number(current?.subtotal ?? 0),
        impuestos: Number(current?.impuestos ?? 0),
        total: Number(current?.total ?? 0),
        estado: current?.estado ?? 'pendiente',
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
