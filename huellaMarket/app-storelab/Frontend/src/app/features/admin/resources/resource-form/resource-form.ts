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
import type { HttpMethod, Resource } from '../../../../core/models/resource.model';
import {
  ResourceCreate,
  ResourceUpdate,
} from '../resource-api';

@Component({
  standalone: true,
  selector: 'app-resource-form',
  imports: [
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule,
    SelectModule,
  ],
  templateUrl: './resource-form.html',
  styleUrl: './resource-form.css',
})
export class ResourceForm {
  private readonly fb = inject(FormBuilder);

  readonly resource = input<Resource | null>(null);
  readonly saved = output<ResourceCreate | ResourceUpdate>();
  readonly cancelled = output<void>();

  readonly methods: { label: string; value: HttpMethod }[] = [
    { label: 'GET', value: 'GET' },
    { label: 'POST', value: 'POST' },
    { label: 'PUT', value: 'PUT' },
    { label: 'PATCH', value: 'PATCH' },
    { label: 'DELETE', value: 'DELETE' },
  ];

  readonly statuses = [
    { label: 'Activo', value: 'active' },
    { label: 'Inactivo', value: 'inactive' },
  ];

  readonly form = this.fb.nonNullable.group({
    path: ['', [Validators.required, Validators.pattern(/^\/.*$/)]],
    method: ['GET' as HttpMethod, Validators.required],
    description: [''],
    status: ['active' as Status, Validators.required],
  });

  constructor() {
    effect(() => {
      const current = this.resource();

      this.form.reset({
        path: current?.path ?? '',
        method: current?.method ?? 'GET',
        description: current?.description ?? '',
        status: current?.status ?? 'active',
      });

      if (current) {
        this.form.controls.status.disable();
      } else {
        this.form.controls.status.enable();
      }
    });
  }

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const value = this.form.getRawValue();

    const path = value.path.trim().replace(/\/+$/, '') || '/';

    const payload: ResourceUpdate = {
      path,
      method: value.method,
      description: value.description.trim() || null,
    };

    if (!this.resource()) {
      this.saved.emit({
        ...payload,
        status: value.status,
      });
      return;
    }

    this.saved.emit(payload);
  }
}
