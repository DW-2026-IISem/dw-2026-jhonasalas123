import { MessageModule } from 'primeng/message';
import { Component, effect, inject, input, output } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { TextareaModule } from 'primeng/textarea';
import { Product, ProductPayload } from '../../../core/models/product.model';

@Component({
  host: { class: 'block' },
  selector: 'app-product-form',
  imports: [
    MessageModule,
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule,
    SelectModule,
    TextareaModule,
  ],
  templateUrl: './product-form.html',
  styleUrl: './product-form.css',
})
export class ProductForm {
  readonly product = input<Product | null>(null);
  readonly resetKey = input(0);
  readonly saving = input(false);

  readonly saved = output<ProductPayload>();
  readonly cancelled = output<void>();

  private readonly fb = inject(NonNullableFormBuilder);

  readonly statusOptions = [
    { label: 'Activo', value: true },
    { label: 'Inactivo', value: false },
  ];

  readonly form = this.fb.group({
    sku: ['', [Validators.required, Validators.maxLength(50)]],
    nombre: ['', [Validators.required, Validators.maxLength(120)]],
    descripcion: [''],
    precio: [0, [Validators.required, Validators.min(0.01)]],
    is_active: [true, [Validators.required]],
  });

  constructor() {
    effect(() => {
      const current = this.product();
      this.resetKey();

      this.form.reset({
        sku: current?.sku ?? '',
        nombre: current?.nombre ?? '',
        descripcion: current?.descripcion ?? '',
        precio: current?.precio ?? 0,
        is_active: current?.is_active ?? true,
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
      sku: value.sku.trim(),
      nombre: value.nombre.trim(),
      descripcion: value.descripcion.trim() || null,
      precio: value.precio,
      is_active: value.is_active,
    });
  }
}
