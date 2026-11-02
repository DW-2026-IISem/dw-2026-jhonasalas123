import { MessageModule } from 'primeng/message';
import { Component, effect, inject, input, output } from '@angular/core';
import {
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import {
  HealthRecord,
} from '../../../core/models/health-record.model';

@Component({
  host: { class: 'block' },
  selector: 'app-health-record-form',
  imports: [
    MessageModule,
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule,
    TextareaModule,
  ],
  templateUrl: './health-record-form.html',
  styleUrl: './health-record-form.css',
})
export class HealthRecordForm {
  readonly healthRecord = input<HealthRecord | null>(null);
  readonly saving = input(false);

  readonly saved = output<Partial<HealthRecord>>();
  readonly cancelled = output<void>();

  private readonly fb = inject(NonNullableFormBuilder);

  readonly form = this.fb.group({
    nombre: ['', [Validators.required, Validators.maxLength(120)]],
    descripcion: [''],
  });

  constructor() {
    effect(() => {
      const current = this.healthRecord();

      this.form.reset({
        nombre: current?.nombre ?? '',
        descripcion: current?.descripcion ?? '',
      });
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
    });
  }
}
