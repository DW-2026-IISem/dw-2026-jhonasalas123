import { ProductModel } from '../models/product.model';

export async function seedProducts(): Promise<void> {
  const count = await ProductModel.count();

  if (count > 0) {
    return;
  }

  await ProductModel.bulkCreate([
    {
      sku: 'ALI-PERRO-001',
      nombre: 'Alimento para perro',
      descripcion: 'Alimento balanceado para perros adultos',
      precio: 85000,
      isActive: true,
    },
    {
      sku: 'ALI-GATO-001',
      nombre: 'Alimento para gato',
      descripcion: 'Alimento balanceado para gatos adultos',
      precio: 65000,
      isActive: true,
    },
    {
      sku: 'ACC-COLLAR-001',
      nombre: 'Collar para mascota',
      descripcion: 'Collar ajustable para perros y gatos',
      precio: 25000,
      isActive: true,
    },
  ]);
}
