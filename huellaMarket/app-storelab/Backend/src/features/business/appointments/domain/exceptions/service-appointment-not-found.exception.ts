import { EntityNotFoundException } from '../../../../../common/exceptions/entity-not-found.exception';

export class ServiceAppointmentNotFoundException extends EntityNotFoundException {
  constructor(id: number) {
    super('CitaServicio', id);
  }
}
