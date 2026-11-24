export interface NavItem {
  label: string;
  icon: string;
  routerLink: string;
  permission?: string;
}

export interface NavGroup {
  label: string;
  icon?: string;
  authOnly?: boolean;
  items: NavItem[];
}

export const NAV: NavGroup[] = [
  {
    label: 'Inicio',
    items: [
      {
        label: 'Dashboard',
        icon: 'pi pi-chart-bar',
        routerLink: '/dashboard',
        permission: 'GET /api/ventas',
      },
    ],
  },
  {
    label: 'Gestión comercial',
    icon: 'pi pi-shopping-bag',
    items: [
      {
        label: 'Clientes',
        icon: 'pi pi-users',
        routerLink: '/clientes',
        permission: 'GET /api/clientes',
      },
      {
        label: 'Proveedores',
        icon: 'pi pi-truck',
        routerLink: '/proveedores',
        permission: 'GET /api/proveedores',
      },
      {
        label: 'Productos',
        icon: 'pi pi-box',
        routerLink: '/productos',
        permission: 'GET /api/productos',
      },
      {
        label: 'Inventario',
        icon: 'pi pi-warehouse',
        routerLink: '/inventario',
        permission: 'GET /api/inventarios',
      },
      {
        label: 'Ventas',
        icon: 'pi pi-shopping-cart',
        routerLink: '/ventas',
        permission: 'GET /api/ventas',
      },
      {
        label: 'Detalles de venta',
        icon: 'pi pi-list',
        routerLink: '/venta-detalles',
        permission: 'GET /api/venta-detalles',
      },
      {
        label: 'Pagos',
        icon: 'pi pi-credit-card',
        routerLink: '/pagos',
        permission: 'GET /api/pagos',
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
        permission: 'GET /api/mascotas',
      },
      {
        label: 'Fichas sanitarias',
        icon: 'pi pi-file',
        routerLink: '/fichas-sanitarias',
        permission: 'GET /api/fichas-sanitarias',
      },
      {
        label: 'Servicios para mascotas',
        icon: 'pi pi-star',
        routerLink: '/servicios-mascota',
        permission: 'GET /api/servicios-mascota',
      },
      {
        label: 'Citas de servicio',
        icon: 'pi pi-calendar',
        routerLink: '/citas-servicio',
        permission: 'GET /api/citas-servicio',
      },
    ],
  },
  {
    label: 'Desarrollo',
    items: [
      {
        label: 'Prototipo',
        icon: 'pi pi-desktop',
        routerLink: '/construir',
      },
    ],
  },
];
