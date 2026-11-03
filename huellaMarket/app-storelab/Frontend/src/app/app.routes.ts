import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./layout/shell/shell').then((m) => m.Shell),
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'clientes' },
      {
        path: 'clientes',
        title: 'Clientes · HuellaMarket',
        loadComponent: () =>
          import('./features/clients/client-list/client-list').then(
            (m) => m.ClientList,
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
    ],
  },
  {
    path: 'construir',
    loadComponent: () =>
      import('./features/construir/construir').then((m) => m.Construir),
  },
  { path: '**', redirectTo: 'clientes' },
];
