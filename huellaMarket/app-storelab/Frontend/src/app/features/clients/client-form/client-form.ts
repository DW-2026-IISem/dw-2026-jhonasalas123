import { Component, effect, inject, input, output } from '@angular/core';
import {
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
import { SelectModule } from 'primeng/select';
import { Client, ClientPayload } from '../../../core/models/client.model';

@Component({
  host: { class: 'block' },
  selector: 'app-client-form',
  imports: [
    MessageModule,
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule,
    SelectModule,
  ],
  templateUrl: './client-form.html',
  styleUrl: './client-form.css',
})
export class ClientForm {
  readonly client = input<Client | null>(null);
  readonly resetKey = input(0);
  readonly saving = input(false);

  readonly saved = output<ClientPayload>();
  readonly cancelled = output<void>();

  private readonly fb = inject(NonNullableFormBuilder);

  readonly documentTypes = [
    { label: 'Cédula de ciudadanía', value: 'CC' },
    { label: 'Tarjeta de identidad', value: 'TI' },
    { label: 'Cédula de extranjería', value: 'CE' },
    { label: 'Pasaporte', value: 'PA' },
    { label: 'NIT', value: 'NIT' },
  ];

  readonly form = this.fb.group({
    tipo_documento: ['CC', Validators.required],
    numero_documento: ['', Validators.required],
    nombre: ['', Validators.required],
    telefono: [''],
    email: ['', Validators.email],
  });

  constructor() {
    effect(() => {
      const current = this.client();
      this.resetKey();

      this.form.reset({
        tipo_documento: current?.tipo_documento ?? 'CC',
        numero_documento: current?.numero_documento ?? '',
        nombre: current?.nombre ?? '',
        telefono: current?.telefono ?? '',
        email: current?.email ?? '',
      });
    });
  }

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const value = this.form.getRawValue();

    const payload: ClientPayload = {
      tipo_documento: value.tipo_documento,
      numero_documento: value.numero_documento.trim(),
      nombre: value.nombre.trim(),
      telefono: value.telefono.trim() || undefined,
      email: value.email.trim() || undefined,
    };

    this.saved.emit(payload);
  }
}
