import { MessageModule } from 'primeng/message';
import { Component, effect, inject, input, output } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { TextareaModule } from 'primeng/textarea';
import { ServiceAppointment } from '../../../core/models/service-appointment.model';

@Component({
  host: { class: 'block' },
  selector: 'app-service-appointment-form',
  imports: [
    MessageModule,
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule,
    SelectModule,
    TextareaModule,
  ],
  templateUrl: './service-appointment-form.html',
  styleUrl: './service-appointment-form.css',
})
export class ServiceAppointmentForm {
  readonly serviceAppointment = input<ServiceAppointment | null>(null);
  readonly resetKey = input(0);
  readonly saving = input(false);

  readonly saved = output<Partial<ServiceAppointment>>();
  readonly cancelled = output<void>();

  private readonly fb = inject(NonNullableFormBuilder);

  readonly statusOptions = [
    { label: 'Activo', value: true },
    { label: 'Inactivo', value: false },
  ];

  readonly form = this.fb.group({
    nombre: ['', [Validators.required, Validators.maxLength(100)]],
    descripcion: [''],
    isActive: [true, [Validators.required]],
  });

  constructor() {
    effect(() => {
      const current = this.serviceAppointment();
      this.resetKey();

      this.form.reset({
        nombre: current?.nombre ?? '',
        descripcion: current?.descripcion ?? '',
        isActive: current?.isActive ?? true,
      });

      if (current) {
        this.form.controls.isActive.disable();
      } else {
        this.form.controls.isActive.enable();
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
      nombre: value.nombre.trim(),
      descripcion: value.descripcion.trim() || null,
      ...(this.serviceAppointment() ? {} : { isActive: value.isActive }),
    });
  }
}
