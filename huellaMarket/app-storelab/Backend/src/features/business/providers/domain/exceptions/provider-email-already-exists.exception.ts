import { DomainException } from '../../../../../common/exceptions/domain.exception';

export class ProviderEmailAlreadyExistsException extends DomainException {
  constructor(email: string) {
    super(`El email '${email}' ya está registrado para un proveedor`);
  }
}
