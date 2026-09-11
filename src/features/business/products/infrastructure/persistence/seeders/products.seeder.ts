import { ProductModel } from '../models/product.model';
import { Status } from '../../../../../../common/enums/status.enum';

export async function seedProducts(): Promise<void> {
  const count = await ProductModel.count();
  if (count > 0) {
    return;
  }

  await ProductModel.bulkCreate([
    {
      name: 'Concentrado para perros adultos',
      brand: 'DogChow',
      price: 59999,
      minStock: 5,
      quantity: 50,
      productTypeId: 1,
      status: Status.ACTIVE,
    },
    {
      name: 'Collar ajustable para perros',
      brand: 'PetCare',
      price: 12999,
      minStock: 10,
      quantity: 100,
      productTypeId: 2,
      status: Status.ACTIVE,
    },
  ]);
}
