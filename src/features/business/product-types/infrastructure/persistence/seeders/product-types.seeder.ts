import { ProductTypeModel } from '../models/product-type.model';
import { Status } from '../../../../../../common/enums/status.enum';

export async function seedProductTypes(): Promise<void> {
  const count = await ProductTypeModel.count();
  if (count > 0) {
    return;
  }

  await ProductTypeModel.bulkCreate([
    {
      name: 'Alimentos',
      description: 'Alimentos y concentrados para mascotas',
      status: Status.ACTIVE,
    },
    {
      name: 'Accesorios',
      description: 'Accesorios y artículos para mascotas',
      status: Status.ACTIVE,
    },
    {
      name: 'Higiene',
      description: 'Productos de higiene y cuidado para mascotas',
      status: Status.ACTIVE,
    },
  ]);
}
