/**
 * Entidad Patient
 */
export class Patient {
  id: number;
  userId: number;
  bloodType?: string;
  weight?: number;
  height?: number;
  medicalHistory?: string;
  emergencyContact?: string;
  createdAt: Date;
  updatedAt?: Date;

  constructor(data: {
    id: number;
    userId: number;
    bloodType?: string;
    weight?: number;
    height?: number;
    medicalHistory?: string;
    emergencyContact?: string;
    createdAt?: Date;
    updatedAt?: Date;
  }) {
    this.id = data.id;
    this.userId = data.userId;
    this.bloodType = data.bloodType;
    this.weight = data.weight;
    this.height = data.height;
    this.medicalHistory = data.medicalHistory;
    this.emergencyContact = data.emergencyContact;
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
   * @returns Estructura primitiva del paciente
   */
  value() {
    return {
      id: this.id,
      userId: this.userId,
      bloodType: this.bloodType,
      weight: this.weight,
      height: this.height,
      medicalHistory: this.medicalHistory,
      emergencyContact: this.emergencyContact,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}
