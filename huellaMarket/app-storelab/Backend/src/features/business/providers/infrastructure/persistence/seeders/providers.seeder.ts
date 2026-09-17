import { ProviderModel } from '../models/provider.model';

export async function seedProviders(): Promise<void> {
  const count = await ProviderModel.count();

  if (count > 0) {
    return;
  }

  await ProviderModel.bulkCreate([
    {
      nit: '900123456-1',
      razon_social: 'Distribuciones Mascotas S.A.S.',
      contacto: 'Carlos Rodríguez',
      telefono: '+57 300 4567890',
      email: 'contacto@distribucionesmascotas.com',
      is_active: true,
    },
    {
      nit: '901234567-2',
      razon_social: 'Alimentos Pet Colombia S.A.S.',
      contacto: 'Laura Martínez',
      telefono: '+57 310 6543210',
      email: 'ventas@alimentospet.com',
      is_active: true,
    },
  ]);
}
