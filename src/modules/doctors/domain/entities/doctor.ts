/**
 * Entidad Doctor
 */
export class Doctor {
  id: number;
  userId: number;
  consultationAmount: number;

  // Campos automáticos
  createdAt: Date;
  updatedAt?: Date;

  constructor(data: {
    id: number;
    userId: number;
    consultationAmount: number;
    createdAt?: Date;
    updatedAt?: Date;
  }) {
    this.id = data.id;
    this.userId = data.userId;
    this.consultationAmount = data.consultationAmount;
    this.createdAt = data.createdAt || new Date();
    this.updatedAt = data.updatedAt;
  }

  /**
   * Permite asignar el ID cuando es generado por la base de datos
   */
  setId(id: number) {
    this.id = id;
  }

  /**
   * @returns Estructura primitiva del doctor
   */
  value() {
    return {
      id: this.id,
      userId: this.userId,
      consultationAmount: this.consultationAmount,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}
