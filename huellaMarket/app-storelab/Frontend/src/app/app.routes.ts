import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./layout/shell/shell').then((m) => m.Shell),
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      {
        path: 'dashboard',
        title: 'Dashboard · HuellaMarket',
        loadComponent: () =>
          import('./features/dashboard/dashboard').then(
            (m) => m.Dashboard,
          ),
      },
      {
        path: 'clientes',
        title: 'Clientes · HuellaMarket',
        loadComponent: () =>
          import('./features/clients/client-list/client-list').then(
            (m) => m.ClientList,
          ),
      },
      {
        path: 'proveedores',
        title: 'Proveedores · HuellaMarket',
        loadComponent: () =>
          import('./features/providers/provider-list/provider-list').then(
            (m) => m.ProviderList,
          ),
      },
      {
        path: 'productos',
        title: 'Productos · HuellaMarket',
        loadComponent: () =>
          import('./features/products/product-list/product-list').then(
            (m) => m.ProductList,
          ),
      },
            {
        path: 'inventario',
        title: 'Inventario · HuellaMarket',
        loadComponent: () =>
          import('./features/inventory/inventory-list/inventory-list').then(
            (m) => m.InventoryList,
          ),
      },
      {
        path: 'mascotas',
        title: 'Mascotas · HuellaMarket',
        loadComponent: () =>
          import('./features/pets/pet-list/pet-list').then(
            (m) => m.PetList,
          ),
      },
      {
        path: 'fichas-sanitarias',
        title: 'Fichas Sanitarias · HuellaMarket',
        loadComponent: () =>
          import('./features/health-records/health-record-list/health-record-list')
            .then((m) => m.HealthRecordList),
      },
      {
        path: 'citas-servicio',
        title: 'Citas de servicio · HuellaMarket',
        loadComponent: () =>
          import('./features/service-appointments/service-appointment-list/service-appointment-list')
            .then((m) => m.ServiceAppointmentList),
      },
      {
        path: 'servicios-mascota',
        title: 'Servicios para mascotas · HuellaMarket',
        loadComponent: () =>
          import('./features/pet-services/pet-service-list/pet-service-list')
            .then((m) => m.PetServiceList),
      },
{
  path: 'ventas',
  title: 'Ventas · HuellaMarket',
  loadComponent: () =>
    import('./features/sales/sale-list/sale-list').then(
      (m) => m.SaleList,
    ),
},
{
  path: 'venta-detalles',
  title: 'Detalles de venta · HuellaMarket',
  loadComponent: () =>
    import('./features/sale-details/sale-detail-list/sale-detail-list').then(
      (m) => m.SaleDetailList,
    ),
},
{
        path: 'pagos',
        title: 'Pagos · HuellaMarket',
        loadComponent: () =>
          import('./features/payments/payment-list/payment-list').then(
            (m) => m.PaymentList,
          ),
      },
    ],
  },
  {
    path: 'construir',
    loadComponent: () =>
      import('./features/construir/construir').then((m) => m.Construir),
  },
  { path: '**', redirectTo: 'dashboard' },
];
