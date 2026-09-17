import { EntityNotFoundException } from '../../../../../common/exceptions/entity-not-found.exception';

export class PetServiceNotFoundException extends EntityNotFoundException {
  constructor(id: number) {
    super('ServicioMascota', id);
  }
}
