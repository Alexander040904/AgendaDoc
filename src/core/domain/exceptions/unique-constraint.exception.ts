export class UniqueConstraintException extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'UniqueConstraintException';
  }
}
