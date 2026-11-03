import { Component, effect, inject, input, output } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { DatePickerModule } from 'primeng/datepicker';
import { SelectModule } from 'primeng/select';
import { TextareaModule } from 'primeng/textarea';
import { Payment, PaymentPayload } from '../../../core/models/payment.model';

@Component({
  selector: 'app-payment-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    ButtonModule,
    InputNumberModule,
    InputTextModule,
    DatePickerModule,
    SelectModule,
    TextareaModule,
  ],
  templateUrl: './payment-form.html',
})
export class PaymentForm {
  private readonly fb = inject(NonNullableFormBuilder);

  readonly payment = input<Payment | null>(null);
  readonly saved = output<PaymentPayload>();
  readonly cancelled = output<void>();

  readonly metodos = [
    { label: 'Efectivo', value: 'efectivo' },
    { label: 'Transferencia', value: 'transferencia' },
    { label: 'Tarjeta', value: 'tarjeta' },
  ];

  readonly estados = [
    { label: 'Pendiente', value: 'pendiente' },
    { label: 'Pagado', value: 'pagado' },
    { label: 'Anulado', value: 'anulado' },
  ];

  readonly referencias = [
    { label: 'Venta', value: 'venta' },
    { label: 'Servicio', value: 'servicio' },
  ];

  readonly form = this.fb.group({
    referencia_tipo: ['venta', Validators.required],
    referencia_id: [1, [Validators.required, Validators.min(1)]],
    metodo: ['efectivo', Validators.required],
    monto: [0, [Validators.required, Validators.min(0)]],
    fecha: [new Date(), Validators.required],
    estado: ['pendiente', Validators.required],
  });

  constructor() {
    effect(() => {
      const payment = this.payment();

      if (payment) {
        this.form.reset({
          referencia_tipo: payment.referencia_tipo,
          referencia_id: payment.referencia_id,
          metodo: payment.metodo,
          monto: Number(payment.monto),
          fecha: new Date(payment.fecha),
          estado: payment.estado,
        });
      } else {
        this.form.reset({
          referencia_tipo: 'venta',
          referencia_id: 1,
          metodo: 'efectivo',
          monto: 0,
          fecha: new Date(),
          estado: 'pendiente',
        });
      }
    });
  }

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const value = this.form.getRawValue();

    this.saved.emit({
      ...value,
      fecha: value.fecha.toISOString(),
    });
  }
}
