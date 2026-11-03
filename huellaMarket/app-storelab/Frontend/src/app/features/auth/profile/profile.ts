import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth';
import { SessionStore } from '../../../core/services/session-store';
import { NotificationService } from '../../../core/services/notification';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
  readonly session = inject(SessionStore);

  private readonly auth = inject(AuthService);
  private readonly router = inject(Router);
  private readonly notify = inject(NotificationService);

  readonly refreshing = signal(false);

  refresh(): void {
    this.refreshing.set(true);

    this.auth.me().subscribe({
      next: () => {
        this.refreshing.set(false);
        this.notify.success(
          'Sesión sincronizada',
          'Perfil y permisos recargados.',
        );
      },
      error: () => {
        this.refreshing.set(false);
        this.notify.error('No se pudo actualizar el perfil');
      },
    });
  }

  logout(): void {
    this.auth.logout().subscribe({
      next: () => {
        this.notify.info('Sesión cerrada');
        void this.router.navigate(['/login']);
      },
    });
  }
}
