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
import { RouterLink } from '@angular/router';
import { SessionStore } from '../../core/services/session-store';
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
private readonly session = inject(SessionStore);

readonly username = computed(
  () => this.session.user()?.username ?? this.session.user()?.email ?? '',
);

readonly initials = computed(() => {
  const name = this.username().trim();

  return name
    ? name.slice(0, 2).toUpperCase()
    : 'US';
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

  readonly items: MenuItem[] = [
    {
      label: 'Dashboard',
      icon: 'pi pi-chart-bar',
      routerLink: '/dashboard',
    },
    {
      label: 'Gestión comercial',
      icon: 'pi pi-shopping-bag',
      items: [
        {
          label: 'Clientes',
          icon: 'pi pi-users',
          routerLink: '/clientes',
        },
        {
          label: 'Proveedores',
          icon: 'pi pi-truck',
          routerLink: '/proveedores',
        },
        {
          label: 'Productos',
          icon: 'pi pi-box',
          routerLink: '/productos',
        },
        {
          label: 'Inventario',
          icon: 'pi pi-warehouse',
          routerLink: '/inventario',
        },
        {
          label: 'Ventas',
          icon: 'pi pi-shopping-cart',
          routerLink: '/ventas',
        },
        {
          label: 'Detalles de venta',
          icon: 'pi pi-list',
          routerLink: '/venta-detalles',
        },
        {
          label: 'Pagos',
          icon: 'pi pi-credit-card',
          routerLink: '/pagos',
        },
      ],
    },
    {
      label: 'Gestión de mascotas',
      icon: 'pi pi-heart',
      items: [
        {
          label: 'Mascotas',
          icon: 'pi pi-github',
          routerLink: '/mascotas',
        },
        {
          label: 'Fichas sanitarias',
          icon: 'pi pi-file',
          routerLink: '/fichas-sanitarias',
        },
        {
          label: 'Servicios para mascotas',
          icon: 'pi pi-star',
          routerLink: '/servicios-mascota',
        },
        {
          label: 'Citas de servicio',
          icon: 'pi pi-calendar',
          routerLink: '/citas-servicio',
        },
      ],
    },
    {
      label: 'Prototipo',
      icon: 'pi pi-desktop',
      routerLink: '/construir',
    },
  ];

  protected onMenuToggle(): void {
    if (this.isDesktop()) {
      this.sidebarCollapsed.update((collapsed) => !collapsed);
      return;
    }

    this.mobileOpen.set(true);
  }
}
