import {
  Component,
  effect,
  inject,
  input,
  output,
} from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';

import type { Status } from '../../../../core/models/api.model';
import { Role } from '../../../../core/models/role.model';
import {
  RoleCreate,
  RoleUpdate,
} from '../role-api';

@Component({
  standalone: true,
  selector: 'app-role-form',
  imports: [
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule,
    SelectModule,
  ],
  templateUrl: './role-form.html',
  styleUrl: './role-form.css',
})
export class RoleForm {
  private readonly fb = inject(FormBuilder);

  readonly role = input<Role | null>(null);
  readonly saved = output<RoleCreate | RoleUpdate>();
  readonly cancelled = output<void>();

  readonly statuses = [
    { label: 'Activo', value: 'active' },
    { label: 'Inactivo', value: 'inactive' },
  ];

  readonly form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.maxLength(60)]],
    description: [''],
    status: ['active' as Status, Validators.required],
  });

  constructor() {
    effect(() => {
      const current = this.role();

      this.form.reset({
        name: current?.name ?? '',
        description: current?.description ?? '',
        status: current?.status ?? 'active',
      });

      const status = this.form.controls.status;

      if (current) {
        status.disable();
      } else {
        status.enable();
      }
    });
  }

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const value = this.form.getRawValue();

    const payload: RoleUpdate = {
      name: value.name.trim().toUpperCase(),
      description: value.description.trim() || null,
    };

    if (!this.role()) {
      const createPayload: RoleCreate = {
        ...payload,
        status: value.status,
      };

      this.saved.emit(createPayload);
      return;
    }

    this.saved.emit(payload);
  }
}
