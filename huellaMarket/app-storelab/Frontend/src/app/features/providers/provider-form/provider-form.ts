import { MessageModule } from 'primeng/message';
import { Component, effect, inject, input, output } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { Provider, ProviderPayload } from '../../../core/models/provider.model';

@Component({
  host: { class: 'block' },
  selector: 'app-provider-form',
  imports: [
    MessageModule,
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule,
    SelectModule,
  ],
  templateUrl: './provider-form.html',
  styleUrl: './provider-form.css',
})
export class ProviderForm {
  readonly provider = input<Provider | null>(null);
  readonly resetKey = input(0);
  readonly saving = input(false);

  readonly saved = output<ProviderPayload>();
  readonly cancelled = output<void>();

  private readonly fb = inject(NonNullableFormBuilder);

  readonly statusOptions = [
    { label: 'Activo', value: true },
    { label: 'Inactivo', value: false },
  ];

  readonly form = this.fb.group({
    nit: ['', [Validators.required, Validators.maxLength(30)]],
    razonSocial: ['', [Validators.required, Validators.maxLength(150)]],
    contacto: [''],
    telefono: [''],
    email: ['', [Validators.email]],
    isActive: [true, [Validators.required]],
  });

  constructor() {
    effect(() => {
      const current = this.provider();
      this.resetKey();

      this.form.reset({
        nit: current?.nit ?? '',
        razonSocial: current?.razonSocial ?? '',
        contacto: current?.contacto ?? '',
        telefono: current?.telefono ?? '',
        email: current?.email ?? '',
        isActive: current?.isActive ?? true,
      });

      // El estado solo cambia mediante /deactivate.
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
      nit: value.nit.trim(),
      razonSocial: value.razonSocial.trim(),
      contacto: value.contacto.trim() || null,
      telefono: value.telefono.trim() || null,
      email: value.email.trim() || null,
      ...(this.provider() ? {} : { isActive: value.isActive }),
    });
  }
}
