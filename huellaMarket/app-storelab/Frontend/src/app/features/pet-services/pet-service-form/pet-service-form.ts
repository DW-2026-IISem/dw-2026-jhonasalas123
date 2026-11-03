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
import { PetService } from '../../../core/models/pet-service.model';

@Component({
  host: { class: 'block' },
  selector: 'app-pet-service-form',
  imports: [
    MessageModule,
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule,
    TextareaModule,
  ],
  templateUrl: './pet-service-form.html',
  styleUrl: './pet-service-form.css',
})
export class PetServiceForm {
  readonly petService = input<PetService | null>(null);
  readonly saving = input(false);

  readonly saved = output<Partial<PetService>>();
  readonly cancelled = output<void>();

  private readonly fb = inject(NonNullableFormBuilder);

  readonly form = this.fb.group({
    nombre: ['', [Validators.required, Validators.maxLength(120)]],
    descripcion: [''],
  });

  constructor() {
    effect(() => {
      const current = this.petService();

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
