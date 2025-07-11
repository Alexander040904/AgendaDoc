import { UniqueConstraintException } from '../../../../core/domain/exceptions/unique-constraint.exception';

export class EmailAlreadyExistsException extends UniqueConstraintException {
  constructor(email: string) {
    super(`El correo electrónico "${email}" ya está registrado.`);
    this.name = 'EmailAlreadyExistsException';
  }
}
