import { EntityNotFoundException } from '../../../../../common/exceptions/entity-not-found.exception';

export class PetNotFoundException extends EntityNotFoundException {
  constructor(id: number) {
    super('Mascota', id);
  }
}
