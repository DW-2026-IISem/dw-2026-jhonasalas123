import { Component, computed, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DrawerModule } from 'primeng/drawer';
import { ToastModule } from 'primeng/toast';
import { watchMediaQuery } from '../../core/utils/media-query';
import { Aside } from '../aside/aside';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';
import { SessionStore } from '../../core/services/session-store';
import { NAV } from './nav.config';

@Component({
  standalone: true,
  host: { class: 'block' },
  selector: 'app-shell',
  imports: [
    RouterOutlet,
    Header,
    Aside,
    Footer,
    ConfirmDialogModule,
    DrawerModule,
    ToastModule,
  ],
  templateUrl: './shell.html',
  styleUrl: './shell.css',
})
export class Shell {
  protected readonly session = inject(SessionStore);

  readonly username = computed(
    () => this.session.user()?.username ?? this.session.user()?.email ?? '',
  );

  readonly initials = computed(() => {
    const name = this.username().trim();
    return name ? name.slice(0, 2).toUpperCase() : 'US';
  });

  readonly roleLabel = computed(
    () => this.session.roleNames().join(', ') || 'Sin rol',
  );

  readonly showSession = computed(
    () => this.session.authEnabled && this.session.isAuthenticated(),
  );

  readonly userItems: MenuItem[] = [
    {
      label: 'Mi perfil',
      icon: 'pi pi-user',
      routerLink: '/perfil',
    },
  ];

  private readonly isDesktop = watchMediaQuery('(min-width: 1024px)');

  readonly sidebarCollapsed = signal(false);
  readonly mobileOpen = signal(false);

  readonly navGroups = computed<MenuItem[]>(() =>
    NAV.filter((group) => !group.authOnly || this.session.authEnabled)
      .map((group) => ({
        label: group.label,
        icon: group.icon,
        items: group.items
          .filter((item) =>
            !item.permission || this.session.canPermission(item.permission)
          )
          .map<MenuItem>((item) => ({
            label: item.label,
            icon: item.icon,
            routerLink: item.routerLink,
            routerLinkActiveOptions: {
              exact: item.routerLink === '/ventas',
            },
          })),
      }))
      .filter((group) => (group.items?.length ?? 0) > 0),
  );

  protected onMenuToggle(): void {
    if (this.isDesktop()) {
      this.sidebarCollapsed.update((collapsed) => !collapsed);
      return;
    }

    this.mobileOpen.set(true);
  }
}
