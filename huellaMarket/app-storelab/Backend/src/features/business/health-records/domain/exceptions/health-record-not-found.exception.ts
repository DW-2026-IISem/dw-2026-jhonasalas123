import { EntityNotFoundException } from '../../../../../common/exceptions/entity-not-found.exception';

export class HealthRecordNotFoundException extends EntityNotFoundException {
  constructor(id: number) {
    super('FichaSanitaria', id);
  }
}
