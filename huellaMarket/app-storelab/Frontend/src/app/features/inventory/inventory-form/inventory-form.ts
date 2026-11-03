import { MessageModule } from 'primeng/message';
import { Component, effect, inject, input, output } from '@angular/core';
import {
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { Inventory } from '../../../core/models/inventory.model';

export type InventoryPayload = Omit<Inventory, 'id' | 'updatedAt'>;

@Component({
  host: { class: 'block' },
  selector: 'app-inventory-form',
  imports: [
    MessageModule,
    ReactiveFormsModule,
    ButtonModule,
    InputNumberModule,
  ],
  templateUrl: './inventory-form.html',
  styleUrl: './inventory-form.css',
})
export class InventoryForm {
  readonly inventory = input<Inventory | null>(null);
  readonly resetKey = input(0);
  readonly saving = input(false);

  readonly saved = output<InventoryPayload>();
  readonly cancelled = output<void>();

  private readonly fb = inject(NonNullableFormBuilder);

  readonly form = this.fb.group({
    ubicacion_id: [1, [Validators.required, Validators.min(1)]],
    item_id: [1, [Validators.required, Validators.min(1)]],
    cantidad: [0, [Validators.required, Validators.min(0)]],
    stock_minimo: [0, [Validators.required, Validators.min(0)]],
  });

  constructor() {
    effect(() => {
      const current = this.inventory();
      this.resetKey();

      this.form.reset({
        ubicacion_id: current?.ubicacion_id ?? 1,
        item_id: current?.item_id ?? 1,
        cantidad: current?.cantidad ?? 0,
        stock_minimo: current?.stock_minimo ?? 0,
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
